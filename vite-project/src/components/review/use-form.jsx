import { useReducer } from "react";
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
        return state;
      }
      return { ...state, rating: state.rating - 1 };
    }
    case INCREASE: {
      if (state.rating >= 5) {
        return state;
      }
      return { ...state, rating: state.rating + 1 };
    }
    default:
      return state;
  }
};

export const useForm = () => {
  const [state, dispatch] = useReducer(reducer, FORM_VALUE);
  const { name, text, rating } = state;
  const setName = (value) => {
    dispatch({ type: SET_NAME, payload: value });
  };
  const setDecrease = () => {
    dispatch({ type: DECREASE });
  };
  const setReview = (value) => {
    dispatch({ type: SET_REVIEW, payload: value });
  };
  const setIncrease = () => {
    dispatch({ type: INCREASE });
  };
  const setClearForm = () => {
    dispatch({ type: CLEAR_FORM });
  };
  return {
    name,
    text,
    rating,
    setClearForm,
    setDecrease,
    setIncrease,
    setName,
    setReview,
  };
};
