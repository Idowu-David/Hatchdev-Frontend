import TaskItem from "./TaskItem";
import { type Task } from "./TasksSlice";
import type React from "react";

interface TaskListProps {
  title: string;
  tasks: Task[];
  emptyMessage: string;
}

const TaskList: React.FC<TaskListProps> = ({ title, tasks, emptyMessage }) => {
  return (
    <div>
			<h2>{title} ({tasks.length})</h2>
			{tasks.length > 0 ? (
				tasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>{emptyMessage}</p>
      )}
    </div>
  );
};

export default TaskList;
