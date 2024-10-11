import { Counter } from "../counter/Counter";
import { useForm } from "./use-form";

export const FormReview = () => {
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
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input
            style={{ margin: "15px" }}
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <textarea
            placeholder="your comment"
            style={{ display: "flex" }}
            id="text"
            onChange={(e) => setReview(e.target.value)}
            value={text}
          />
        </label>
        <span>Rating</span>
        <Counter
          value={rating}
          increase={() => setIncrease()}
          decrease={() => setDecrease()}
        />
        <button onClick={() => setClearForm()}>Clear</button>
      </form>
    </div>
  );
};
