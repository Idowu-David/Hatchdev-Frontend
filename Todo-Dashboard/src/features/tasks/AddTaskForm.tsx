import React from "react";
import { useState } from "react";
import { addTask } from "./TasksSlice";
import { useDispatch } from "react-redux";
import { type Task } from "./TasksSlice";

interface AddTaskFormProps {
  onFormSubmit?: () => void;
}

const AddTaskForm:React.FC<AddTaskFormProps> = ({ onFormSubmit }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>(undefined);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const submitTask = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title.trim()) {
      alert("Please enter a task title");
    }

    dispatch(addTask({ title: title, description: description }));
    setTitle("");
    setDescription("");
    setDate("");
		setPriority("low");
		
		if (onFormSubmit) onFormSubmit();
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <div>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <label htmlFor="due-date">Due date</label>
        <div>
          <input
            type="datetime-local"
            id="due-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <fieldset>
          <legend>Priority</legend>
          <div>
            <label>
              High
              <input
                type="radio"
                name="priority"
                value="high"
                checked={priority === "high"}
                onChange={(e) =>
                  setPriority(e.target.value as Task["priority"])
                }
              />
            </label>

            <label>
              Moderate
              <input
                type="radio"
                name="priority"
                value="moderate"
                checked={priority === "moderate"}
                onChange={(e) =>
                  setPriority(e.target.value as Task["priority"])
                }
              />
            </label>

            <label>
              Low
              <input
                type="radio"
                name="priority"
                value="low"
                checked={priority === "low"}
                onChange={(e) =>
                  setPriority(e.target.value as Task["priority"])
                }
              />
            </label>
          </div>
        </fieldset>

        <div>
          <div>
            <label htmlFor="description">Description</label>
          </div>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button onClick={submitTask}>Done</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
