import React, { useState } from 'react';
import {CheckCircleIcon, PencilIcon, TrashIcon} from "@heroicons/react/outline";

export default function Todo({todo, toggleComplete, handleDelete, handleEdit}) {
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleChange = (e) => {
        e.preventDefault();
        if(todo.complete === true) {
            setNewTitle(todo.title);
        }
        else {
            todo.title = "";
            setNewTitle(e.target.value);
        }
    };

    return (
        <div>
            <input type='text'
                   value={todo.title === "" ? newTitle : todo.title}
                   className=''
                   onChange={handleChange}
            />
            <div>
                <button className=''
                        onClick={() => toggleComplete(todo)}
                >
                    <CheckCircleIcon />
                </button>
                <button className=''
                        onClick={() => handleEdit(todo, newTitle)}
                >
                    <PencilIcon />
                </button>
                <button className=''
                        onClick={() => handleDelete(todo.id)}
                >
                    <TrashIcon />
                </button>
            </div>
        </div>
    );
}