import React, { useState } from "react";
import { addTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const TodoInput: React.FC = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default TodoInput;
