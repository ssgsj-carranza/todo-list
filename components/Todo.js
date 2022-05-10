import React, {useState} from 'react'
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";
import TodoForm from './TodoForm';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({id: null, value:''});

    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: '',
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

  return todos.map((todo, index) => (
      <div className={todo.isComplete ? '' : 'is-complete'} key={index}>
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
          </div>
          <div className=''>
              <RiCloseCircleLine onClick={() => removeTodo(todo.id)} 
                                 className=''
              />
              <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} 
                      className='' 
              />
          </div>
      </div>
  ));
};

export default Todo