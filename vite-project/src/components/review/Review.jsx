import { useSelector } from "react-redux";
import { selectUserById } from "../../../redux/users";
import { selectReviewById } from "../../../redux/reviews";
import styles from "./review.module.css";
export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const user = useSelector((state) => selectUserById(state, review.userId));
  return (
    <li className={styles.reviewCard}>
      User: {user.name} <div>text: {review.text}</div>
      <div>star: {review.rating}</div>
    </li>
  );
};
