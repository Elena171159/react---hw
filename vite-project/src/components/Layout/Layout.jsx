import { ProgressBar } from "./ProgressBar/ProgressBar";
import React from "react";
import styles from "./layout.module.css";
import { ThemeButton } from "../use-themes-context/ThemeButton";
import { useUserTheme } from "../use-theme-context-user/useuser";
export const Layout = ({ children }) => {
  const { authUser } = useUserTheme();
  return (
    <>
      <ProgressBar />
      <ThemeButton />
      <header className={styles.header}>
        <button onClick={authUser}>Login</button>
      </header>
      {children}
      <footer className={styles.footer} />
    </>
  );
};
