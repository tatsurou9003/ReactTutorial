import React from "react";

export const InputTodo = (props) => {
  return (
    <div className="input-area">
      <input
        placeholder="Input TODO"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickAdd}>Add</button>
    </div>
  );
};
