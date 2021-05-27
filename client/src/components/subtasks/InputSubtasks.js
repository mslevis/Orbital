import React, { Fragment, useState } from 'react';


const InputSubtasks = ({todo}) => {
    const [description, setDescription] = useState("");
    const task_id = todo.todo_id;
    
    const submitSubtask = async e => {
        e.preventDefault();
        try {
            if (description === "") {

            } else {
                const body = { task_id, description };
                const response = await fetch("http://localhost:5000/subtasks", {
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });
                document.querySelector(`#input_subtask${todo.todo_id}`).value = "";
            }
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <form className="d-flex mt-5" onSubmit={submitSubtask}>
        <input type="text" 
            id={`input_subtask${todo.todo_id}`}
            className="form-control"
            placeholder="Input subtask"
            onChange={e =>
            setDescription(e.target.value)}/>

        <input type="submit" value = "Add" className="btn-success btn"/>
        </form>
    );
};


export default InputSubtasks;