import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, type Todo } from "../redux/todoSlice";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      </li>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
    </div>
  );
};

export default TodoItem;
