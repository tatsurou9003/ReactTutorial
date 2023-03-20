import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickRestore } = props;
  return (
    <div className="complete-area">
      <p className="title">Complete TODO</p>
      {todos.map((todo, index) => {
        return (
          <div key={todo} className="list-row">
            <ul>
              <li>{todo}</li>
              <button onClick={() => onClickRestore(index)}>Restore</button>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
