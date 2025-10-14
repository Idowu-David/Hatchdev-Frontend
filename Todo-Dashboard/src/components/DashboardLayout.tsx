import { useState } from "react";
import AddTaskForm from "../features/tasks/AddTaskForm";
import TaskList from "../features/tasks/TaskList";
import Modal from "./Modal";
import { useAppSelector } from "../hooks";

const DashboardLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks } = useAppSelector((state) => state.tasks);

  const activeTasks = tasks.filter((task) => task.status !== "completed");

  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <hr />
      <div>
        <h2>To Do</h2>
        <button onClick={() => setIsModalOpen(true)}>+ Add Task</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddTaskForm onFormSubmit={() => setIsModalOpen(false)} />
      </Modal>

      <div>
        <TaskList
          tasks={activeTasks}
          title="To-Do"
          emptyMessage="No active tasks. Greate job!"
        />
      </div>
      <div>
        <TaskList
          tasks={completedTasks}
          title="Completed"
          emptyMessage="No tasks completed yet."
        />
      </div>
    </div>
  );
};

export default DashboardLayout;
