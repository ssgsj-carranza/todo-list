import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange= (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('');
    }

  return (
    <form className="" onSubmit={handleSubmit}>
        <input type='text' 
               placeholder="Enter task" 
               value={input} name='text' 
               className='' 
               onChange={handleChange}/>
        <button className="text-white bg-indigo-400 rounded-full px-4 py-1 cursor-pointer hover:shadow-lg hover:animate-pulse">Add task</button>
    </form>
  )
}

export default TodoForm