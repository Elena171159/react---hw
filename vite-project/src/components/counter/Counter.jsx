import styles from "./counter.module.css";
export const Counter = ({ value, increase, decrease }) => {
  return (
    <div className={styles.counterContainer}>
      <button className={styles.counterButton} onClick={increase}>
        +
      </button>
      <span className={styles.count}>{value}</span>
      <button className={styles.counterButton} onClick={decrease}>
        -
      </button>
    </div>
  );
};
