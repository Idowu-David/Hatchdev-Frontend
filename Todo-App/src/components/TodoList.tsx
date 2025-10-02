import React from "react";
import type { Task } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onToggle }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default TodoList;
