import { useReducer } from "react";
import { Counter } from "../counter/Counter";
const FORM_VALUE = {
  name: "",
  text: "",
  rating: 1,
};
const SET_NAME = "name";
const INCREASE = "increase";
const DECREASE = "decrease";
const SET_REVIEW = "text";
const CLEAR_FORM = "clear";
const reducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_REVIEW:
      return { ...state, text: action.payload };
    case CLEAR_FORM:
      return FORM_VALUE;
    case DECREASE: {
      if (state.rating < 1) {
        return { ...state, rating: 1 };
      }
      return { ...state, rating: state.rating - 1 };
    }
    case INCREASE: {
      if (state.rating >= 5) {
        return { ...state, rating: 5 };
      }
      return { ...state, rating: state.rating + 1 };
    }
    default:
      return state;
  }
};
export const FormReview = () => {
  const [state, dispatch] = useReducer(reducer, FORM_VALUE);
  const { name, text, rating } = state;
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input
            style={{ margin: "15px" }}
            id="name"
            onChange={(e) =>
              dispatch({ type: SET_NAME, payload: e.target.value })
            }
            value={name}
          />
        </label>
        <label>
          <textarea
            placeholder="your comment"
            style={{ display: "flex" }}
            id="text"
            onChange={(e) =>
              dispatch({ type: SET_REVIEW, payload: e.target.value })
            }
            value={text}
          />
        </label>
        <span>Rating</span>
        <Counter
          counter={rating}
          getAdd={() => dispatch({ type: INCREASE })}
          getDelete={() => dispatch({ type: DECREASE })}
        ></Counter>
        <button onClick={() => dispatch({ type: CLEAR_FORM })}>Clear</button>
      </form>
    </div>
  );
};
