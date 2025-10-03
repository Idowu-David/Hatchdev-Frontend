import React, { useState } from "react";
import TodoFilter from "./TodoFilters";
import "../App.css";

interface TodoInputProps {
  onAddTask: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    onAddTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Create a new task..."
      />
      <button type="submit">Add</button>
      <TodoFilter />
    </form>
  );
};

export default TodoInput;
