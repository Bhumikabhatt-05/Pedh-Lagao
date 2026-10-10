import stripe from '../config/stripe.js'
import orderModel from '../models/orderModel.js'

const deliveryFees = 10   // keep equal to deliveryFees in ShopContext
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'

// Customer: save the order, then open Stripe checkout
const createCheckoutSession = async (req, res) => {
  try {
    const { userId, products, address } = req.body

    if (!Array.isArray(products) || products.length === 0) {
      return res.json({ success: false, message: 'Cart is empty' })
    }

    const subtotal = products.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const order = await orderModel.create({
      userId,
      items: products,
      amount: subtotal + deliveryFees,
      address,
      paymentMethod: 'Stripe',
      payment: false,
      date: Date.now(),
    })

    const line_items = products.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }))

    line_items.push({
      price_data: {
        currency: 'usd',
        product_data: { name: 'Delivery Charges' },
        unit_amount: deliveryFees * 100,
      },
      quantity: 1,
    })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${frontendUrl}/success?orderId=${order._id}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/cart`,
    })

    res.json({ success: true, id: session.id, url: session.url })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// Customer: Success page calls this to confirm the payment with Stripe
const verifyPayment = async (req, res) => {
  try {
    const { userId, orderId, sessionId } = req.body
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status === 'paid') {
      await orderModel.findOneAndUpdate({ _id: orderId, userId }, { payment: true })
      res.json({ success: true })
    } else {
      res.json({ success: false, message: 'Payment not completed' })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// Customer: their own paid orders
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body
    const orders = await orderModel.find({ userId, payment: true })
    res.json({ success: true, orders })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// Admin: all paid orders
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ payment: true })
    res.json({ success: true, orders })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// Admin: change an order's status
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body
    await orderModel.findByIdAndUpdate(orderId, { status })
    res.json({ success: true, message: 'Status updated' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export { createCheckoutSession, verifyPayment, userOrders, allOrders, updateStatus }