import { Counter } from "../counter/Counter";
import { useForm } from "./use-form";
import classnames from "classnames";
import { useTheme } from "../use-themes-context/use-theme";
import styles from "./review.module.css";
import React from "react";

export const FormReview = () => {
  const { theme } = useTheme();
  const {
    name,
    text,
    rating,
    setClearForm,
    setDecrease,
    setIncrease,
    setReview,
    setName,
  } = useForm();
  return (
    <div className={styles.row}>
      <form className={styles.reviewform} onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name" className={styles.label}>
          <span className={styles.span}>Name</span>
          <input
            className={styles.input}
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label htmlFor="text" className={styles.label}>
          <textarea
            className={styles.textarea}
            placeholder="your comment"
            id="text"
            onChange={(e) => setReview(e.target.value)}
            value={text}
          />
        </label>
        <span className={styles.span}>Rating</span>
        <Counter
          value={rating}
          increase={() => setIncrease()}
          decrease={() => setDecrease()}
        />
        <button
          className={classnames(styles.submit, {
            [styles.light]: theme === "light",
            [styles.dark]: theme === "dark",
          })}
          onClick={() => setClearForm()}
        >
          <span className={styles.span}>Clear</span>
        </button>
      </form>
    </div>
  );
};
