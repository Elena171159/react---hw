import { ProgressBar } from "./ProgressBar/ProgressBar";
import React from "react";
import styles from "./layout.module.css";
import { ThemeButton } from "../use-themes-context/ThemeButton";
import { useAuth } from "../use-theme-context-user/useuser";
import { LoginButton } from "../LoginButton/LoginButton";
import { Cart } from "../Cart/Cart";

export const Layout = ({ children }) => {
  const { user } = useAuth();
  return (
    <>
      <ProgressBar />
      <ThemeButton />
      <header className={styles.header}>
        <LoginButton />
      </header>
      {children}
      {user && <Cart />}
      <footer className={styles.footer} />
    </>
  );
};
