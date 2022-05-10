import React, { useEffect, useState } from 'react'
import AddTodo from '../components/addTodo'
import Header from '../components/Header'
// import TodoList from '../components/TodoList'
import {collection, query, onSnapshot, doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from "../firebase";
import Todo from '../components/Todo';

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
        <div>
          {todos.map((todo) => (
            <Todo key ={todo.id}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
            />
          ))}
        </div>   
    </div>
  )
}

export default todo