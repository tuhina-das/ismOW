import React from 'react'
// import { MdEdit } from "react-icons/md"


export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    // console.log(task.title)
    return (
        <div className="Todo">
            <p onClick={() => toggleComplete(task.ID)} className={`${task.completed === 1 ? 'completed' : ""}`}>{task.title}</p>
            <div>
                <button onClick={() => editTodo(task.ID)} className="edit-button">Edit</button>
                <button onClick={() => deleteTodo(task.ID)} className="delete-button">Delete</button>
                
            </div>
        </div>
    )
}