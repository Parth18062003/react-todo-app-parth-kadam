import * as React from "react";
import { Checkbox } from "../checkbox";
import "./todo-list.scss";

export const TodoList = (props) => {
  const { todos, setTodos } = props;

  const handleDelete = (id) => {
    // Function to delete task
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleCheck = (id) => {
    // Function to toggle task
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.task} // Use 'task' instead of 'label'
              checked={todoItem.checked} // Use 'completed' instead of 'checked'
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
