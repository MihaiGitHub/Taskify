import React from "react";
import "./styles.css";

// setTodo type gotten from hovering over it in App.tsx
interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
}

// define InputField type and arguments
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="input">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputField;
