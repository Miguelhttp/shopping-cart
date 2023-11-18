import React, { useContext } from "react";
import propTypes from "prop-types";
import { BsCartDashFill } from "react-icons/bs";
import styles from "./CartItems.module.css";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

export default function CartItems({ data }) {
  const { id, thumbnail, title, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <section className={styles.cart_item}>
      <img
        src={thumbnail}
        alt="Image do Produto"
        className={styles.cart_item_image}
      />

      <div className={styles.cart_item_content}>
        <h3 className={styles.title_cart_item}>{title}</h3>
        <h3 className={styles.price_cart_item}>
          {formatCurrency(price, "BRL")}
        </h3>

        <button
          onClick={handleRemoveItem}
          type="button"
          className={styles.button_remove_cart}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

CartItems.propTypes = {
  data: propTypes.object,
}.isRequired;
