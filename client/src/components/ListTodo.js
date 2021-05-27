import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodo = () => {

    const [todos, setTodos] = useState([]);
    
    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));

            const deleteSubtasks = await fetch(`http://localhost:5000/subtasks/${id}`, {
                method: "DELETE"
            });

        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getTodos();
    }, [todos]);
    return (<Fragment>
        {" "}
        <table className="table mt-5 text-center task_table">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Complete Task</th>
                    <th scope="col">Edit Task</th>
                    <th scope="col">Delete Task</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                
                    <tr key={todo.todo_id}>
                        <td className="task_name">{todo.description}</td>
                        <td> <button className="btn btn-success complete_task">COMPLETE!</button></td>
                        <td>
                            <EditTodo todo={todo}/>
                        </td>
                        <td>
                            <button className="btn btn-danger" 
                            onClick={() => deleteTodo(todo.todo_id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    </Fragment>);
};

export default ListTodo;