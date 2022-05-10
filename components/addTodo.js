import React, { useState } from 'react';
import {db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";

export default function AddTodo() {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title !== "") {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
            });
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' 
                       placeholder='Enter task' 
                       value={title} 
                       onChange={(e) => setTitle((e.target.value))}
                />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    );
}