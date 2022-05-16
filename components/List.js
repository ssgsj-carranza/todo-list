import React, { useState } from 'react';
import {CheckCircleIcon, XCircleIcon, TrashIcon, SaveIcon, ArrowCircleRightIcon} from "@heroicons/react/outline";
import Link from 'next/link';


export default function List({list, toggleComplete, handleDelete, handleEdit, id}) {
    const [newTitle, setNewTitle] = useState(list.title);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    }

    const handleUnclick = () => {
        setIsClicked(false);
    }

    const handleMouseHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleChange = (e) => {
        e.preventDefault();
        if(list.complete === true) {
            setNewTitle(list.title);
        }
        else {
            list.title = "";
            setNewTitle(e.target.value);
        }
    };

    return (
        <div className='grid grid-cols-2 py-4'>
            <input type='text'
                   value={list.title === "" ? newTitle : list.title}
                   className='font-semibold flex-grow sm:flex items-center md:border-2 rounded-full py-2 px-5 md:shadow-sm cursor-pointer bg-gradient-to-br from-gray-200 to-white'
                   onChange={handleChange}
                   onClick={handleMouseHover}
            />
            <div className='text-indigo-800 py-2'>
            {!isHovered ? (
                <div className='space-x-3 md:pl-10 pl-20'>
                    <button onClick={() => toggleComplete(list)}>
                        {!isClicked ? (
                            <CheckCircleIcon className="h-5 w-5 hover:scale-150 transition duration-200 ease-in-out cursor-pointer" onClick={handleClick} />
                        ) : (
                            <XCircleIcon className= "h-5 w-5 hover:scale-150 transition duration-200 ease-in-out cursor-pointer" onClick={handleUnclick}/>
                        )}
                    </button>
                    <button onClick={() => handleDelete(list.id)}>
                        <TrashIcon className="h-5 w-5 hover:scale-150 transition duration-200 ease-in-out cursor-pointer" />
                    </button>
                    <Link href={`/todo/${list.id}`}>
                        <button>
                            <ArrowCircleRightIcon className="h-5 w-5 hover:scale-150 transition duration-200 ease-in-out cursor-pointer" />
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="relative text-indigo-800 focus-within:text-gray-400">
                    <span className="absolute left-0 flex items-center pl-2">
                        <button className="p-1 focus:outline-none focus:shadow-outline"
                                onClick={() => handleEdit(list, newTitle)}
                        >
                            <SaveIcon className="h-5 w-5 hover:scale-150 transition duration-200 ease-in-out cursor-pointer" onClick={handleMouseLeave} />
                        </button>
                    </span>
                </div>   
            )}   
            </div>
        </div>
    );
}