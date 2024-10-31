import React from "react";
import { Review } from "./Review";

export const Reviews = ({ reviewsId }) => {
  if (reviewsId.length <= 0) {
    return <h2>No reviews</h2>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviewsId.map((id) => {
          return <Review key={id} id={id} />;
        })}
      </ul>
    </div>
  );
};
