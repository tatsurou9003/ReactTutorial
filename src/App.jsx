import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo"

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  // inputした値にstateを更新
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    // jsのreturnで戻り値を指定しないとunderdefinedを返す　=　処理を終わらせる
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // 未完了リストから削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    // 完了リストに追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    //　更新
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickRestore = (index) => {
    // 完了リストから削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    // 未完了リストに追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    // 更新
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo />
      <div className="incomplete-area">
        <p className="title">Incomplete TODO</p>
        {incompleteTodos.map((todo, index) => {
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
      <div className="complete-area">
        <p className="title">Complete TODO</p>
        {completeTodos.map((todo, index) => {
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
    </>
  );
};
