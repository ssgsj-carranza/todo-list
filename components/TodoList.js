import React, {useState} from 'react'
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const today = new Date().toLocaleDateString();

    const addTodo = (todo) => {
        //prevents long spaces from showing up ex: '         '
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    }

  return (
    <div>
        <h1>TO-DO for {today}</h1>
        <TodoForm />        
    </div>
  )
}

export default TodoList