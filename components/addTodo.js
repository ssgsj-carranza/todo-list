import React, { useState } from 'react';
import {db} from "../firebase";
import {collection, addDoc, doc, getDocs, query} from "firebase/firestore";
import { useSession } from 'next-auth/react' ;


export default function AddTodo({id}) {
    const [title, setTitle] = useState("");
    const {data: session} = useSession();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const q = query(collection(db, 'lists'));
        // const querySnapshot =await getDocs(querySnapshot);
        // const queryData = querySnapshot.docs.map((detail) => ({
        //     ...detail.data(),
        //     id: detail.id,
        // }));
        // console.log(queryData);
        // queryData.map(async (v) => {
        //     await setDoc(doc(db, `lists/${v.id}/todos`), {
        //         title,
        //         completed: false,
        //     });
        // })
        if(title !== "") {
            await addDoc(collection(db, 'todos'), {
                title,
                completed: false,
            });
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col items-center pt-10  py-2 px-14 text-center'>
            <div className='sm:flex flex-grow items-center md:border-2 rounded-full py-2 md:shadow-sm cursor-pointer bg-gradient-to-br from-gray-200 to-white'>
                <input type='text' 
                       placeholder='Enter task' 
                       value={title} 
                       onChange={(e) => setTitle((e.target.value))}
                       className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
                />
            </div>
            <div className='text-indigo-800 cursor-pointer transition duration-200 ease-out'>
                <button className='hover:shadow-lg rounded-full px-4 py-1 font-semibold pt-2'>Add</button>
            </div>
        </form>
    );
}