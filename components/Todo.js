import React, {useState} from 'react'
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";

function Todo({todos, completeTodo}) {
    const [edit, setEdit] = useState({id: null, value:''});

  return todos.map((todo, index) => (
      <div className={todo.isComplete ? '' : 'is-complete'} key={index}>
          <div key={todo.id} onClick={() => completeTodo(todo.id, index)}>
              {todo.text}
          </div>
          <div className=''>
              <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className=''/>
              <TiEdit onClick={() => setEdit(todo.id)} className='' />
          </div>
      </div>
  ))
}

export default Todo