import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TaskPriority = "low" | "moderate" | "high";

export interface Task {
  title: string;
  description: string;
  id: string;
  status: "completed" | "inProgress" | "notStarted";
  priority?: TaskPriority;
  image?: string;
  creationDate?: string;
  dueDate?: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{
        title: string;
        description: string;
        dueDate?: string;
      }>
    ) => {
      const newTask: Task = {
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        dueDate: action.payload.dueDate,
        status: "notStarted",
        creationDate: new Date().toLocaleDateString("en-GB"),
        priority: "low",
      };
      state.tasks.unshift(newTask);
    },

    updateTaskStatus: (
      state,
      action: PayloadAction<{ id: string; status: Task["status"] }>
    ) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) task.status = action.payload.status;
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTaskStatus, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
