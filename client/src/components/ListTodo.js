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
        <table className="table mt-5 text-center entire_shit">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {/*<tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr> */}
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
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