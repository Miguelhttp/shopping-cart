import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BsFillCartPlusFill } from "react-icons/bs";
import styles from "./ProductCard.module.css";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

export default function ProductCard({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { title, thumbnail, price } = data;

  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <section className={styles.product_card}>
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className={styles.card_image}
      />

      <div className={styles.card_info}>
        <h2 className={styles.card_price}>{formatCurrency(price, "BRL")}</h2>
        <h2 className={styles.card_title}>{title}</h2>
      </div>

      <button
        onClick={handleAddCart}
        type="button"
        className={styles.button_add_cart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({}),
}.isRequired;
