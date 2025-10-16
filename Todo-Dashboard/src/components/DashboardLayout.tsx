import { useState } from "react";
import AddTaskForm from "../features/tasks/AddTaskForm";
import TaskList from "../features/tasks/TaskList";
import Modal from "./Modal";
import { useAppSelector } from "../hooks";
import "../styles/dashBoard.css";
import SideNav from "./SideNav";

const DashboardLayout:React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks } = useAppSelector((state) => state.tasks);

  const activeTasks = tasks.filter((task) => task.status !== "completed");

  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url(./dashboard-bg.png)] bg-center bg-no-repeat bg-cover">
      <div className="grid grid-rows-[50px_1fr] w-3/4 h-4/5 rounded-[25px] overflow-hidden bg-gray-100">
        <header className="flex items-center justify-between bg-[#e8dfdf] shadow-md px-4 z-10">
          <div className="font-bold text-[25px]">
            <span className="text-[#ff6767]">Dash</span>
            <span>board</span>
          </div>
          <input type="text" />
          <p className="font-semibold text-[.9rem]">
            {new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-GB"
            )}
          </p>
        </header>
        <div className="grid grid-cols-[170px_1fr]">
          <aside className="relative">
            <SideNav />
          </aside>

          <main className="p-4">
            <div>
              <h2>To Do</h2>
              <button onClick={() => setIsModalOpen(true)}>Add Task</button>
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
