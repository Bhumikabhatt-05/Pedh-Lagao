import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

  const currency = '$';
  const deliveryFees = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const navigate = useNavigate()

  // Token — load from localStorage on startup
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  // Add To Cart Function
  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Sync token to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  const getProductData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setProducts(response.data.products)
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductData();
  }, [])

  const value = {
    products,
    currency,
    deliveryFees,
    cartItems,
    addToCart,
    backendUrl,
    token,
    setToken,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};
