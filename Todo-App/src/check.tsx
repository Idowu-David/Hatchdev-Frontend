import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the shape of a task
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");

  // Add new task
  const addTask = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newTask: Task = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInput("");
  };

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  // Toggle completion
  const toggleTask = (id: number): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>My ToDo List</h1>

      {/* Input Field */}
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
