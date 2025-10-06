import React from "react";
import type { Task } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
	onDelete: (id: number) => void;
	darkMode: boolean
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onToggle, onDelete, darkMode }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
					onDelete={onDelete}
					darkMode={darkMode}
        />
      ))}
    </ul>
  );
};

export default TodoList;
