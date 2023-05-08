import React, { useState } from 'react'
import TodoDisplay from '../components/TodoDisplay';
import TodoForm from '../components/TodoForm';

const TodoBoard = () => {
    const [todoList, setTodoList] = useState([]);

    const toDoHandle = (newTask) => {
        setTodoList([...todoList, newTask])
    }

    const handleComplete = (onCompleteUpdate, i) =>{
        const tempList = [...todoList]
        tempList[i].isComplete = onCompleteUpdate;
        setTodoList(tempList)
    }

    const handleDelete = (e,delIndx) =>{
        const filteredTodo = todoList.filter((todo,i) => {
            return i !== delIndx;
        })
        setTodoList(filteredTodo)
    }

    return (
        <div className='container d-flex justify-content-around mt-5'>
            <TodoForm onNewTask={toDoHandle} />
            <TodoDisplay todoList={todoList} onCompleteUpdate = {handleComplete} onDelete = {handleDelete}/>
        </div>
    )
}

export default TodoBoard