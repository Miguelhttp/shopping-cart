import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./CartButton.module.css";
import AppContext from "../../context/AppContext";

export default function CartButton() {
  const { cartItems, cartIsVisible, setCartIsVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className={styles.cart_btn}
      onClick={() => setCartIsVisible(!cartIsVisible)}
    >
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && (
        <span className={styles.cart_status}>{cartItems.length}</span>
      )}
    </button>
  );
}
