import React, { useState } from 'react';
import './App.css';

export function App() {
  const [todoText, setTodoText] = useState('')

  const [incompleteTodos, setIncompleteTodos] = useState([
    'ああああ',
    'いいいい',
  ]);

  const [completeTodos, setCompleteTodos] = useState([
    'うううう'
  ]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  }

  const onClickAdd = () => {
    if (todoText === '') {
      return;
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  }

  const onClickRevert = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <div>
        <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo}>
              <ul>
                <li>{todo}</li>
                <button onClick={() => { onClickComplete(index) }}>完了</button>
                <button onClick={() => { onClickDelete(index) }}>削除</button>
              </ul>
            </div>
          )
        })}
      </div>
      <div>
        <p>完了のTODO</p>
        <div>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo}>
                <ul>
                  <li>
                    {todo}
                  </li>
                  <button onClick={() => { onClickRevert(index) }}>戻す</button>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
