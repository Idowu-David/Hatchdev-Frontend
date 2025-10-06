import React from "react";
import type { Task } from "../types";

interface TodoItemProps {
  task: Task;
	onToggle: (id: number) => void;
	onDelete: (id: number) => void;
	darkMode: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggle, onDelete, darkMode }) => {
  return (
    <div className="todo-item-container">
			<div className={`todo-item-text ${darkMode ? "dark" : "light"}`}>
        <li style={{ listStyleType: "none" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
        </li>
      </div>
      <button className="delete-button" onClick={() => onDelete(task.id)}>X</button>
    </div>
  );
};

export default TodoItem;
