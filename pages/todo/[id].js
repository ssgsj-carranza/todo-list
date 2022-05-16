import React, { useEffect, useState } from 'react'
// import TodoList from '../components/TodoList'
import {collection, query, onSnapshot, doc, updateDoc, deleteDoc} from "firebase/firestore";
import AddTodo from '../../components/addTodo';
import Todo from '../../components/Todo';
import { db } from '../../firebase';
import Header from '../../components/Header';

function todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({...doc.data(), id: doc.id});
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), {title: title});
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
    });
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div>
        <Header />
        {/* <TodoList /> */}
        <div>
          <AddTodo />
        </div>
        <div className='pt-10 grid place-items-center'>
          {todos.map((todo) => (
            <div>
            <Todo key ={todo.id}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
            />
            </div>
          ))}
        </div>   
    </div>
  )
}

export default todo