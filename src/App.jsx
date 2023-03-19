import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい",
  ]);
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="Input TODO" />
        <button>Add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Incomplete TODO</p>
        {incompleteTodos.map((todo) => {
          return (
            <div key={todo} className="list-row">
              <ul>
                <li>{todo}</li>
                <button>Complete</button>
                <button>Delete</button>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="complete-area">
        <p className="title">Complete TODO</p>
        {completeTodos.map((todo) => {
          return (
            <div key={todo} className="list-row">
              <ul>
                <li>{todo}</li>
                <button>Restore</button>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};
