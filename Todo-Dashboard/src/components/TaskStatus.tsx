// src/features/dashboard/TaskStatus.tsx

import React from "react";

// A reusable prop type for each circle
interface StatusCircleProps {
  percentage: number;
  label: string;
  colorClass: string; // e.g., "text-green-500"
  bgColorClass: string; // e.g., "bg-green-100"
}

// A reusable component for one circle card
const StatusCircle: React.FC<StatusCircleProps> = ({
  percentage,
  label,
  colorClass,
  bgColorClass,
}) => {
  return (
    // The white card for each status
		<div className="flex items-center justify-center">
			<div className={`${bgColorClass} w-20 h-20 rounded-full flex items-center justify-center`}>
				<div className="bg-white w-14 h-14 rounded-full flex justify-center items-center">
					<span className="text-xl font-bold">{percentage}%</span>
				</div>
			</div>
	 </div>
  );
};

// The main component that holds all three cards
const TaskStatus = () => {
  return (
    <section className="mb-5 shadow-md pb-6 rounded-lg pt-4">
      <h2 className="text-[15px] font-bold mb-3 pl-4">Task Status</h2>

      <div className="flex justify-evenly">
        <StatusCircle
          percentage={84}
          label="Completed"
          colorClass="text-green-500"
          bgColorClass="bg-green-100"
        />
        <StatusCircle
          percentage={46}
          label="In Progress"
          colorClass="text-blue-500"
          bgColorClass="bg-blue-100"
        />
        <StatusCircle
          percentage={13}
          label="Not Started"
          colorClass="text-red-500"
          bgColorClass="bg-red-100"
        />
      </div>
    </section>
  );
};

export default TaskStatus;
