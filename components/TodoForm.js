import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange= (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }

  return (
    <form className="" onSubmit={handleSubmit}>
        {props.edit ? (
            <>
                <input type='text' 
                placeholder="Update task" 
                value={input} 
                name='text' 
                className='' 
                onChange={handleChange}
                ref={inputRef}
                />
                <button className="text-white bg-indigo-400 rounded-full px-4 py-1 cursor-pointer hover:shadow-lg hover:animate-pulse">Update</button>
            </>
        ) : (
            <>
                <input type='text' 
                placeholder="Enter task" 
                value={input} name='text' 
                className='' 
                onChange={handleChange}
                ref={inputRef}
                />
                <button className="text-white bg-indigo-400 rounded-full px-4 py-1 cursor-pointer hover:shadow-lg hover:animate-pulse">Add task</button>
            </>
        )}
    </form>
  )
}

export default TodoForm