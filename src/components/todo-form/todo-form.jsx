import * as React from "react";
import "./todo-form.scss";

// Function to generate a unique ID
const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");

  // Load todos from local storage on component mount
  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, [setTodos]);

  // Save todos to local storage whenever todos state changes
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty.")
      return; // Prevent adding empty tasks
    }

    // Validate task length
    const words = task.trim();
    if (words.length > 10) {
      alert("Task should contain 10 words or less.");
      return;
    }

    // Validate task characters
    const isValidTask = /^[a-zA-Z0-9\s]+$/.test(task.trim());
    if (!isValidTask) {
      alert("Task should contain only letters and numbers.");
      return;
    }

    // Check if task already exists
    const taskExists = todos.some(
      (todo) => todo.task.trim().toLowerCase() === task.trim().toLowerCase()
    );
    if (taskExists) {
      const existingTodo = todos.find(
        (todo) => todo.task.trim().toLowerCase() === task.trim().toLowerCase()
      );
      if (existingTodo.completed) {
        alert("Task was done before!");
      } else {
        alert("Task already exists!");
      }
      return;
    }

    const newTodo = {
      id: generateUniqueId(), // Generate unique id for the new todo
      task: task.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]); // Add new todo to the existing todos
    setTask(""); // Clear the task input
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
