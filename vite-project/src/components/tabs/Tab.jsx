import React from "react";
import styles from "./tabs.module.css";
export const Tab = ({ id, onClick, name, key }) => {
  return (
    <button className={styles.tab} id={id} onClick={onClick} key={key}>
      {name}
    </button>
  );
};
