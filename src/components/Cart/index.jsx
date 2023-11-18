import React, { useContext } from "react";
import styles from "./Cart.module.css";
import CartItems from "../CartItems";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

export default function Cart() {
  const { cartItems, cartIsVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, value) => acc + value.price, 0);

  return (
    <section className={`${styles.cart} ${cartIsVisible ? styles.cart_active : ""}`}>
      <div className={styles.cart_items}>
        {cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className={styles.cart_resume}>
        Valor total: {formatCurrency(totalPrice, "BRL")}
      </div>
    </section>
  );
}
