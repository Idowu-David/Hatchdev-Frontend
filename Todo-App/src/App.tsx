import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { Task } from "./types";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

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
		setTasks(prev => prev.filter(task => task.id !== id))
	}

  return (
    <div className="todo-app">
      <header className="app-header">
        <h1>TODO LIST</h1>
      </header>
      <div className="todo-input">
        <TodoInput onAddTask={addTask} />
      </div>

      <div className="todo-list">
        <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
