import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

import styles from "./Loading.module.css";

export default function Loading() {
  return <BiLoaderAlt className={styles.loading} />;
}
