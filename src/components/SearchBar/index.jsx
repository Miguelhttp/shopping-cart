import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import fetchProducts from "../../api/fetchProducts";
import styles from "./SearchBar.module.css";
import AppContext from "../../context/AppContext";

export default function SearchBar() {
  const {setProducts, setLoading} = useContext(AppContext);
  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const products = await fetchProducts(search);

    setProducts(products);
    setLoading(false);
    setSearch("");
  };

  return (
    <React.Fragment>
      <form className={styles.search_bar} onSubmit={handleSearch}>
        {name}
        <input
          type="search"
          placeholder="Buscar produtos"
          value={search}
          className={styles.search_input}
          onChange={({ target }) => setSearch(target.value)}
          required
        />
        <button type="submit" className={styles.search_btn}>
          <BsSearch />
        </button>
      </form>
    </React.Fragment>
  );
}
