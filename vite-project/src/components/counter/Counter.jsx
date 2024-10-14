import styles from "./counter.module.css";
import { useTheme } from "../use-themes-context/use-theme";
import classnames from "classnames";
export const Counter = ({ value, increase, decrease }) => {
  const { theme } = useTheme();
  return (
    <div className={styles.counterContainer}>
      <button
        className={classnames(styles.counterButton, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
        onClick={increase}
      >
        +
      </button>
      <span className={styles.count}>{value}</span>
      <button
        className={classnames(styles.counterButton, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
        onClick={decrease}
      >
        -
      </button>
    </div>
  );
};
