import React from "react";
import { type Task, updateTaskStatus, deleteTask } from "./TasksSlice";

import { useAppDispatch } from "../../hooks";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  const handleStatusToggle = () => {
    const newStatus = task.status === "completed" ? "inProgress" : "completed";
    dispatch(updateTaskStatus({ id: task.id, status: newStatus }));
  };

  const handleDeleteTask = () => {
    if (window.confirm(`Are you sure you want to delete "${task.title}"`)) {
      dispatch(deleteTask(task.id));
    }
  };

  const buttonStyle = "p-1 rounded-md font-semibold border border-t-2 shadow-m lg:text-xs";

  const priorityMap = {
    low: {
      text: "Low",
      color: "#73c1ea",
    },
    moderate: {
      text: "Moderate",
      color: "#86efac",
    },
    high: {
      text: "High",
      color: "#f97316",
    },
  };

  const displayPriority = task.priority
    ? priorityMap[task.priority]["text"]
    : "N/A";
  const colorPriority = task.priority
    ? priorityMap[task.priority]["color"]
    : "N/A";

  const statusMap = {
    completed: {
      text: "Completed",
      color: "#04a301",
    },
    notStarted: {
      text: "Not Started",
      color: "#f21e1d",
    },
    inProgress: {
      text: "In Progress",
      color: "#0224ff",
    },
  };

  const displayStatus = statusMap[task.status]["text"];
  const colorStatus = statusMap[task.status]["color"];

  return (
    <div className="border border- my-3 px-4 pt-2 rounded-xl pb-2 shadow-[0_0_10px_rgba(0,0,0,0.4)] max-w-lg mx-auto md:max-w-lg md:mx-auto">
      <h3 className="font-bold text-gray-800 pb-2 lg:text-sm">{task.title}</h3>
      <p className="pb-2 text-base text-gray-500 lg:text-xs">{task.description}</p>
      {task.dueDate ? (
        <p className="pb-2 text-center text-sm text-gray-500 lg:text-xs">
          Due on - {task.dueDate}
        </p>
      ) : (
        <p className="pb-2 text-center">No Due Date</p>
      )}
      <div className="font-semibold mb-2 flex justify-between lg:text-xs">
        <span>
          Priority: <span style={{color: colorPriority}}>{displayPriority} </span>
        </span>
        <span>
          Status: <span style={{color: colorStatus}}>{displayStatus}</span>
        </span>
      </div>
      <div className="flex justify-evenly">
        <button
          onClick={handleStatusToggle}
          className={`${buttonStyle} text-green-800 bg-green-300`}
        >
          {task.status === "completed" ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button
          onClick={handleDeleteTask}
          className={`${buttonStyle} text-red-800 bg-red-300`}
        >
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
