import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import type React from "react";
import { type RootState } from "../redux/store";
import type { Todo } from "../redux/todoSlice";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.filter.value);

  const filteredTodos: Todo[] = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <div>
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
