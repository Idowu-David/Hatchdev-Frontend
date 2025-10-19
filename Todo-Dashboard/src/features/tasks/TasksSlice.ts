import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TaskPriority = "low" | "moderate" | "high";

export interface Task {
  title: string;
  description: string;
  id: string;
  status: "completed" | "inProgress" | "notStarted";
  priority?: TaskPriority
  image?: string;
  creationDate?: string;
  dueDate?: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    {
      id: "1",
      title: "Attend Nischal's Birthday Party",
      description:
        "Buy gifts on the way and pick up cake from the bakery. [6 PM | Fresh Elements]....",
      status: "notStarted",
      priority: "moderate",
      creationDate: "20/06/2023",
      dueDate: "15/10/2025",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "2",
      title: "Landing Page Design for TravelDays",
      description:
        "Get the work done by EOD and discuss with client before leaving. [4 PM | Meeting Room]",
      status: "inProgress",
      priority: "moderate",
      creationDate: "20/06/2023",
      dueDate: "15/10/2025",
      image:
        "https://images.unsplash.com/photo-1522881451255-f5f69c5fdf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    },
    {
      id: "3",
      title: "Walk the dog",
      description: "Take the dog to the park and bring treats as well.",
      status: "completed",
      creationDate: new Date(
        Date.now() - 2 * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-GB"),
      dueDate: "15/10/2025",
    },
  ],
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
