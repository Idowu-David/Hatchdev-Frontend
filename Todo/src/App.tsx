import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css"
import TodoFilter from "./components/TodoFilter";

function App() {
  return (
    <div className="app-container">
			<h1>Todo App</h1>
			<TodoInput />
			<TodoFilter/>
			<TodoList />
    </div>
  );
}

export default App;
