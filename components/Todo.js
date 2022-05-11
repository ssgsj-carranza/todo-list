import React, { useState } from 'react';
import {CheckCircleIcon, PencilIcon, TrashIcon, SaveIcon} from "@heroicons/react/outline";

export default function Todo({todo, toggleComplete, handleDelete, handleEdit}) {
    const [newTitle, setNewTitle] = useState(todo.title);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

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
        <div className='grid grid-cols-2 py-4'>
            <input type='text'
                   value={todo.title === "" ? newTitle : todo.title}
                   className='font-semibold'
                   onChange={handleChange}
                   onMouseEnter={handleMouseHover}
                   onMouseLeave={handleMouseLeave}
            />
            <div className='text-indigo-800'>
            {!isHovered ? (
                <>
                <button 
                        onClick={() => toggleComplete(todo)}
                >
                    <CheckCircleIcon className="h-5 w-5 hover:scale-150 transition duration-200 ease-in-out cursor-pointer" />
                </button>
                <button className=''
                        onClick={() => handleDelete(todo.id)}
                >
                    <TrashIcon className="h-5 w-5 hover:scale-150 transition duration-200 ease-in-out cursor-pointer" />
                </button>
                </>
            ) : (
                <button className=''
                        onClick={() => handleEdit(todo, newTitle)}
                >
                    <SaveIcon className="h-5 w-5 hover:scale-150 transition duration-200 ease-in-out cursor-pointer" />
                </button>   
            )}   
            </div>
        </div>
    );
}