import styles from "./Button.module.css";
import { useTheme } from "../use-themes-context/use-theme";
import classnames from "classnames";
export const Button = ({ text, onClick, className }) => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <button
      onClick={onClick}
      className={classnames(styles.button, styles[theme], className)}
    >
      {text}
    </button>
  );
};
