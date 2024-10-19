import { ProgressBar } from "./ProgressBar/ProgressBar";
import React from "react";
import styles from "./layout.module.css";
import { ThemeButton } from "../use-themes-context/ThemeButton";
import { useAuth } from "../use-theme-context-user/useuser";
import { LoginButton } from "../counter/LoginButton/LoginButton";

export const Layout = ({ children }) => {
  const { authUser } = useAuth();
  return (
    <>
      <ProgressBar />
      <ThemeButton />
      <header className={styles.header}>
        <LoginButton />
      </header>
      {children}
      <footer className={styles.footer} />
    </>
  );
};
