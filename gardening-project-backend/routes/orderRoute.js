import express from "express";
import stripe from "../config/stripe.js";

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { products } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: products.map(item => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cart",
    });

    // in your stripeRoute.js
res.json({ id: session.id, url: session.url });  // add url here

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});


 
export default router;