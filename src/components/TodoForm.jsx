import { useState } from 'react';


const TodoForm = (props) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // what should we do with the message?
        const newTask = {task, isComplete: false}
        props.onNewTask(newTask)

        setTask("")
    };

    return (
        <form className='bg-dark text-white h-25 p-5' onSubmit={handleSubmit}>
            <h1>Carpe Diemo My Dude</h1>
            <textarea
                className='mt-3'
                rows="4"
                cols="50"
                placeholder="Enter your task here"
                onChange={(e) => setTask(e.target.value)}
                value={task}
            ></textarea>
            <br />
            <input className='btn btn-outline-danger mt-3' type="submit" value="Send Message" />
        </form>
    );
};

export default TodoForm;
