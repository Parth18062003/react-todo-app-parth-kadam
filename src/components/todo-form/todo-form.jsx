import * as React from "react";
import "./todo-form.scss";

export const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty.")
      return; // Prevent adding empty tasks
    }

    const newTodo = {// Generate unique id for the new todo
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
