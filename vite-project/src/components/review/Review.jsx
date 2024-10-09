import React from "react";
import styles from "./review.module.css";
export const Reviews = ({ reviews }) => {
  if (reviews.length <= 0) {
    return <h2>No reviews</h2>;
  }
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(({ user, text, rating, id }) => {
          return (
            <li key={id} className={styles.reviewCard}>
              User: {user} <div>text: {text}</div>
              <div>star: {rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
