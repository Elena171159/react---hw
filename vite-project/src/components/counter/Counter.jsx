import styles from "./counter.module.css";
import { Button } from "../Button/Button";
import { useTheme } from "../use-themes-context/use-theme";
import classnames from "classnames";
export const Counter = ({ value, increase, decrease }) => {
  const { theme } = useTheme();
  return (
    <div className={styles.counterContainer}>
      <Button
        onClick={increase}
        text="+"
        className={classnames(styles.counterButton, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
      />
      <span className={styles.count}>{value}</span>
      <Button onClick={decrease} text="-" className={styles.counterButton} />
    </div>
  );
};
