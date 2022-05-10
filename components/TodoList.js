import React, {useState} from 'react'
import Todo from './Todo';
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

    const completeTodo = (id) => {
        //toggle between true or false
        let updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

    const removeTodo = (id) => {
        //checks in the array for the todo
        const removeArray = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArray);
    }

  return (
    <div>
        <h1>TO-DO for {today}</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />        
    </div>
  )
}

export default TodoList