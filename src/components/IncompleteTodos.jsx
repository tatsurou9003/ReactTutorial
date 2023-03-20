import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">Incomplete TODO</p>
      {todos.map((todo, index) => {
        return (
          // ループでレンダリングする場合React側の目印として一意なkeyを設定する
          <div key={todo} className="list-row">
            <ul>
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>Complete</button>
              {/* JSXで関数に引数を与える場合の書き方 */}
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
