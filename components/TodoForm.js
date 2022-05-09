import React, {useState} from 'react'

function TodoForm() {
    const [input, setInput] = useState('');
    

  return (
    <form className="">
        <input type='text' placeholder="Enter task" value={input} name='text' className=''/>
        <button className="text-white bg-indigo-400 rounded-full px-4 py-1 cursor-pointer hover:shadow-lg hover:animate-pulse">Add task</button>
    </form>
  )
}

export default TodoForm