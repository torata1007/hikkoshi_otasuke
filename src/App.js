import { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from "uuid";

function App() {
  //useStateはtodoを監視する。無駄なサイレンダンリングを防ぐ。
  //変数を監視して、更新されたときにサイレンダリングしてページの内容を変える。
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Todo1", completed: false },
  ]);

  const todoNameRef = useRef();

  //タスクを追加できるために、関数を定義する。中に書くこと。
  const handleAddTodo = () => {
    //タスクを追加する。
    const name = todoNameRef.current.value;
    //setTodos関数を使ってリストにテキストボックスの中身を格納する。
    setTodos((prevTodos) => {
      //スプレッド構文、前のタスクに新しいタスクを追加する。
      return [...prevTodos, { id: "1", name: name, compleated: false }];
    });
    todoNameRef.current.value = null;
  };

  //チェックボックスを切り替える関数を用意
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    //自分自身を探す
    const todo = newTodos.find((todo) => todo.id === id);
    //反転させる。つまり、完了⇔未完
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type='text' ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
