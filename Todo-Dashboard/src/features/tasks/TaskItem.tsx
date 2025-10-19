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
	
	const buttonStyle = "bg-red-300 p-1 rounded-md font-semibold hover:bg-[#ff6767] text-";

  return (
    <div className="border border- my-3 px-4 pt-2 rounded-xl pb-2 shadow-xl">
      <h3 className="font-bold pb-2">{task.title}</h3>
      <p className="pb-2 text-[#4d4b4b]">{task.description}</p>
      {task.dueDate ? (
        <p className="pb-2 text-center">Due on - {task.dueDate}</p>
      ) : (
        <p className="pb-2 text-center">No Due Date</p>
      )}
      <div className="font-semibold mb-2">
        <span className="mr-5">
          Status: <strong>{task.status}</strong>
        </span>

        <span>
          Priority: <strong>{task.priority}</strong>
        </span>
      </div>
      <div className="flex justify-evenly">
        <button onClick={handleStatusToggle} className={buttonStyle}>
          {task.status === "completed" ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button onClick={handleDeleteTask} className={buttonStyle}>Delete Task</button>
      </div>
    </div>
  );
};

export default TaskItem;
