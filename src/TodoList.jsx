import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos,toggleTodo }) => {
    //   return (
    //     //jsx記法、波括弧の中はJavaScriptをかける。
    //     <div>{todos}</div>
    //   )

      //map関数、中身を一つ一つ取り出すもの
      return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>)
}

export default TodoList