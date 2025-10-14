import React from "react";
import { type Task, updateTaskStatus, deleteTask } from "./TasksSlice";
import { useAppDispatch } from "../../hooks";

interface TaskItemProps {
  task: Task;
}



const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
	const dispatch = useAppDispatch();

	const handleStatusToggle = () => {
		const newStatus = task.status === 'completed' ? 'inProgress' : 'completed'
		dispatch(updateTaskStatus({id: task.id, status: newStatus}))
	};

	const handleDeleteTask = () => {
		if (window.confirm(`Are you sure you want to delete "${task.title}"`)) {
			dispatch(deleteTask(task.id))
		}
	}

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div>
        <span>Status: <strong>{task.status}</strong></span>
        <span>Priority: <strong>{task.priority}</strong></span>
			</div>
			<button onClick={handleStatusToggle}>
				{task.status === 'completed' ? 'Mark Incomplete' : 'Mark Complete'}
			</button>
			<button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;
