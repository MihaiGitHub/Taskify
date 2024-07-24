import React, { useRef } from "react";
import "./styles.css";

// setTodo type gotten from hovering over it in App.tsx
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

// define InputField type and arguments
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        inputRef.current?.blur();

        handleAdd(e);
      }}
    >
      <input
        ref={inputRef}
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
