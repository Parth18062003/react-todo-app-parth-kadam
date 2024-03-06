import * as React from "react";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;

  const calculateChecked = () => {
    // Filter the todos array to get only the completed tasks
    const completedTodos = todos.filter(todo => todo.checked);
    // Return the count of completed tasks
    return completedTodos.length;
  };

  return (
    <div className="todo-results">
      Done: {calculateChecked()}
    </div>
  );
};
