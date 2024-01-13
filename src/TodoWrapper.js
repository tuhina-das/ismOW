import React, { useState, useEffect } from 'react'
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import axios from 'axios';
import './Todo.css';

uuidv4(); //figure out what this does later

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    // const [todo, setTodo] = useState("");

    //get data
    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                // console.log(res)
                res.data.map((todo, index) => {
                    // console.log(todo.ID + ", " + todo.title + ", " + todo.completed286)
                    setTodos(todos => [...todos, todo]);
                    // console.log(todo);
                })
            })
            .catch(err => console.log(err));
    }, [])

    const addTodo = (todo, day) => {
        if (todo === '') {
            alert("Fill something out before submitting!")
        }
        else if (day===''){
            alert("What day of the week is this?")
        }
        else {
            //backend stuff, add to db
            const uid = 1;
            axios.post('http://localhost:8081/create', {todo, day, uid})
            .then(res => {
                console.log(res);
            }).catch(err => console.log(err));

            //visual update of to-do list
            setTodos([...todos, { id: uuidv4(), title: todo, completed: false, isEditing: false }]);
            // console.log("ToDo :   " + todos); //check
        }
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.ID === id ? {
            ...todo, completed: (todo.completed === 0) ? 1 : 0
        } : todo
        ))
    }

    async function handleDelete(id) {
        try {
            await axios.delete('http://localhost:8081/todo/' + id)
            // console.log("request sent")
            // window.location.reload()
        }catch(err) {
            console.log(err)
        }
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.ID !== id))
        handleDelete(id);
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, idEditing: !todo.isEditing
        } : todo
        ))
    }

    // console.log(todos)
    return (
        <div className="TodoWrapper">
            <TodoForm addTodo={addTodo} />
            {
                todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm />
                    ) : (
                        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )
                ))
            }
        </div>
    )
}