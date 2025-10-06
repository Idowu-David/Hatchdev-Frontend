import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { Task } from "./types";
import "./App.css";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "undone" | "completed">("all");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "undone") return !task.completed;
    return true;
  });

  console.log(filteredTasks);

  return (
    <div className={`todo-app ${darkMode ? "dark" : "light"}`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {darkMode ? <BsSunFill /> : <BsMoonFill />}
        </button>
      </div>

      <header className="app-header">
        <h1>TODO LIST</h1>
      </header>
      <div className="todo-input">
        <TodoInput onAddTask={addTask} />
        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value as "all" | "completed" | "undone")
          }
        >
          <option value="all">ALL</option>
          <option value="undone">UNDONE</option>
          <option value="completed">COMPLETED</option>
        </select>
      </div>

      <div className="todo-list">
        <TodoList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default App;
