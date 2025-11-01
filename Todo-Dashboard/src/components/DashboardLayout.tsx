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
    <div className="h-dvh lg:bg-[url(./dashboard-bg.png)] lg:bg-cover lg:bg-no-repeat lg:bg-center lg:flex lg:justify-center lg:items-center">
      <div className="relative lg:max-w-4xl lg:w-[90%] bg-white rounded-xl overflow-hidden lg:h-[90%] lg:grid lg:grid-rows-[auto_auto_1fr]">
        <header
          className="sticky top-0 z-20
				bg-red-200 shadow-md flex items-center justify-between p-3 h-13 mb-3"
        >
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

        <div className="grid grid-cols-[auto_1fr] lg:grid-cols-1">
					
					<button
						className="lg:hidden ml-4 "
						onClick={() => setisSideBarOpen(!isSideBarOpen)}
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
					<h2 className="text-2xl font-bold text-center mb-4">
						Welcome back, David👋
					</h2>
				</div>

        <div className="">
          <div className="mx-4 lg:flex lg:gap-8 lg:h-full">
            <aside className="">
              <SideNav
                isSideNavOpen={isSideBarOpen}
                onClose={() => setisSideBarOpen(false)}
              />
              {isSideBarOpen && (
                <div
                  onClick={() => setisSideBarOpen(false)}
                  className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
                ></div>
              )}
            </aside>
            <main className="p-4 pt-0 mt-6 mx-auto md:mx-0 lg:border lg:border-[#9d9696] lg:grid lg:grid-rows-[auto_1fr] w-full">
              <section className="md:flex md:flex-col mb-4 border-2 pb-6 rounded-xl max-w-lg mx-auto lg:mt-2">
                <TaskStatus
                  completedTasks={noCompletedTasks}
                  inProgressTasks={noInProgressTasks}
                  notStartedTasks={noNotStartedTasks}
                  total={totalTasks}
                />
              </section>
              
              <div className="md:grid md:grid-cols-2 md:gap-4">
								
                <div className="">
									<button
                className="font-semibold"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="text-[#ff6767]">+</span> Add Task
              </button>
                  <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  >
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
    </div>
  );
};

export default DashboardLayout;
