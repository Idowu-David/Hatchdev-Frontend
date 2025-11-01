import React from "react";

interface StatusCircleProps {
  percentage: number;
  label: string;
  color: string;
  textColorClass: string;
}

const StatusCircle: React.FC<StatusCircleProps> = ({
  percentage,
  label,
  color,
  textColorClass,
}) => {
  const gradientStyle = {
    background: `conic-gradient(${color} ${percentage}%, #e5e7eb 0)`,
  };

  return (
    <div className="p-4 rounded-lg flex relative items-center shadow-[0_0_5px_rgba(0,0,0,0.3)] w-1/3 h-h-full justify-center">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-3 mx-2"
        style={gradientStyle}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className={`font-bold ${textColorClass}`}>
            {percentage}%
          </span>
        </div>
      </div>

      <div
        className={`text-sm absolute bottom-0 font-semibold w-full right-0 pb-1 text-center`}
      >
        ● {label}
      </div>
    </div>
  );
};

interface TaskStatusProps {
  completedTasks: number;
  inProgressTasks: number;
  notStartedTasks: number;
  total: number;
}

const TaskStatus: React.FC<TaskStatusProps> = ({
  completedTasks,
  inProgressTasks,
  notStartedTasks,
  total,
}) => {
  return (
    <section className="mb-4 border-2 pb-6 rounded-xl w-full">
      <h2 className="text-base font-bold mb-4 pl-8 pt-2 text-[#ff6867]">Task Status</h2>
      <div className="flex justify-evenly">
        <StatusCircle
          percentage={
            completedTasks ? Math.floor((completedTasks * 100) / total) : 0
          }
          label="Completed"
          color="#22c55e"
          textColorClass="text-green-500"
        />
        <StatusCircle
          percentage={
            inProgressTasks ? Math.floor((inProgressTasks * 100) / total) : 0
          }
          label="In Progress"
          color="#3b82f6"
          textColorClass="text-blue-500"
        />
        <StatusCircle
          percentage={
            notStartedTasks ? Math.floor((notStartedTasks * 100) / total) : 0
          }
          label="Not Started"
          color="#ef4444"
          textColorClass="text-red-500"
        />
      </div>
    </div>
  );
};

export default TaskStatus;
