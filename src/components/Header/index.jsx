import React from "react";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar";
import CartButton from "../CartButton";

export default function Header() {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className="container">
          <SearchBar />
          <CartButton />
        </div>
      </header>
    </React.Fragment>
  );
}
