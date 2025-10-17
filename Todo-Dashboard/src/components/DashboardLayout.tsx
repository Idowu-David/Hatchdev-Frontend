import { useState } from "react";
import AddTaskForm from "../features/tasks/AddTaskForm";
import TaskList from "../features/tasks/TaskList";
import Modal from "./Modal";
import { useAppSelector } from "../hooks";
import "../styles/dashBoard.css";
import SideNav from "./SideNav";

const DashboardLayout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks } = useAppSelector((state) => state.tasks);

  const activeTasks = tasks.filter((task) => task.status !== "completed");

  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="min-h-screen">
      {/* flex items-center justify-center bg-[url(./dashboard-bg.png)] bg-center bg-no-repeat bg-cover */}
      <div className="">
        {/* "grid grid-rows-[50px_1fr] w-3/4 h-[90%] rounded-[25px] overflow-hidden bg-gray-100" */}
        <header
          className="sticky top-0 z-20
				bg-red-200 shadow-md flex items-center justify-between p-3 h-13"
        >
          {/* flex items-center justify-between bg-[#e8dfdf] shadow-md px-4 z-10 */}
          <div className="font-bold text-3xl">
            <span className="text-[#ff6767]">Dash</span>
            <span>board</span>
          </div>
          <input
            type="text"
            className="w-1/2 px-3 py-1 rounded-lg border mx-2"
            placeholder="Search a task..."
          />
          <div className="flex flex-col items-center font-semibold text-[12px]">
            <p>Today</p>
            <p className="">
              {new Date(
                Date.now() - 2 * 24 * 60 * 60 * 1000
              ).toLocaleDateString("en-GB")}
            </p>
          </div>
        </header>
        <h2 className="text-2xl font-bold mt-3 text-center mb-4">
          Welcome back, David👋
        </h2>
        <div className="mt-0 mx-3 border-black">
          <aside className="relative">
            <SideNav />
          </aside>

          <main className="p-4 pt-0 relative">
            <div className="border-2 border-black h-[100px]">Completed</div>
            <button
              className="font-semibold absolute right-4 mt-1"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="text-[#ff6767]">+</span> Add Task
            </button>
            <div className="">
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <AddTaskForm onFormSubmit={() => setIsModalOpen(false)} />
              </Modal>
              {/* Active Tasks */}
              <div>
                <TaskList
                  tasks={activeTasks}
                  title="To-Do"
                  emptyMessage="No active tasks. Greate job!"
                />
              </div>
            </div>

            {/* Task Status */}
            <div className="">
              <div>
                <TaskList
                  tasks={completedTasks}
                  title="Completed"
                  emptyMessage="No tasks completed yet."
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
