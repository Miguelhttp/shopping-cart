import React, { useState } from "react";
import PropTypes from "prop-types";
import AppContext from "../AppContext";

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    cartIsVisible,
    setCartIsVisible,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  /** The content of the provider */
  children: PropTypes.any,
}.isRequired;
