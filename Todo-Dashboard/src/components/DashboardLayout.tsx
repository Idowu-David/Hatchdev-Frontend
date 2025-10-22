import { useState } from "react";
import AddTaskForm from "../features/tasks/AddTaskForm";
import TaskList from "../features/tasks/TaskList";
import Modal from "./Modal";
import { useAppSelector } from "../hooks";
import "../styles/dashBoard.css";
import SideNav from "./SideNav";
import TaskStatus from "./TaskStatus";

const DashboardLayout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  const { tasks } = useAppSelector((state) => state.tasks);
  const user = useAppSelector((state) => state.auth);

  const activeTasks = tasks.filter((task) => task.status !== "completed");

  const completedTasks = tasks.filter((task) => task.status === "completed");

  const noCompletedTasks = completedTasks.length;
  const noInProgressTasks = tasks.filter(
    (task) => task.status === "inProgress"
  ).length;
  const noNotStartedTasks = tasks.filter(
    (task) => task.status === "notStarted"
  ).length;

  const totalTasks = noCompletedTasks + noInProgressTasks + noNotStartedTasks;

  return (
    <div className="min-h-screen">
      {/* flex items-center justify-center bg-[url(./dashboard-bg.png)] bg-center bg-no-repeat bg-cover */}
      <div className="relative">
        {/* "grid grid-rows-[50px_1fr] w-3/4 h-[90%] rounded-[25px] overflow-hidden bg-gray-100" */}
        <header
          className="sticky top-0 z-20
				shadow-md flex items-center justify-between p-3 h-13 mb-3"
        >
          {/* flex items-center justify-between bg-[#e8dfdf] shadow-md px-4 z-10 */}
          <div className="font-bold text-3xl">
            <span className="text-[#ff6867]">Dash</span>
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
        <div className="flex items-center relative gap-2">
          <button
            onClick={() => setisSideBarOpen(!isSideBarOpen)}
            className="absolute top-2 ml-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-center mb-4 w-full">
            {`Welcome, ${user.user?.name}`}
          </h2>
        </div>
        <div className="mx-3 shadow-lg rounded-lg">
          <aside>
            <SideNav
              isSideNavOpen={isSideBarOpen}
              onClose={() => setisSideBarOpen(false)}
            />
            {isSideBarOpen && (
              <div
                onClick={() => setisSideBarOpen(false)}
                className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
              ></div>
            )}
          </aside>

          <main className="p-4 pt-0 relative mt-">
            <div className="flex items-center justify-center">
              <TaskStatus
                completedTasks={noCompletedTasks}
                inProgressTasks={noInProgressTasks}
                notStartedTasks={noNotStartedTasks}
                total={totalTasks}
              />
            </div>
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
