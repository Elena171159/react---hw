import React from "react";
import styles from "./tabs.module.css";
import classnames from "classnames";
import { useTheme } from "../use-themes-context/use-theme";
export const Tab = ({ id, onClick, name }) => {
  const { theme } = useTheme();
  return (
    <button
      className={classnames(styles.tab, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      id={id}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
