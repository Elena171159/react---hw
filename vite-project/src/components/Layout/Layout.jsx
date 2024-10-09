import { ProgressBar } from "./ProgressBar/ProgressBar";
import React from "react";
import styles from "./layout.module.css";
export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <header className={styles.header} />
      {children}
      <footer className={styles.footer} />
    </>
  );
};
