import React from "react";
import type { Task } from "../types";

interface TodoItemProps {
  task: Task;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggle }) => {
  return (
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
  );
};

export default TodoItem;
