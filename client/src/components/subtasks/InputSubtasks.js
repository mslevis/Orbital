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
                document.querySelector(".input_subtask").value = "";
            }
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <form className="d-flex mt-5" onSubmit={submitSubtask}>
        <input type="text" 
            className="form-control input_subtask"
            placeholder="Input subtask" 
            onChange={e =>
            setDescription(e.target.value)}/>

        <input type="submit" value = "Add" className="btn-success btn"/>
        </form>
    );
};

/*
const InputToDo = () => {
    const [description, setDescription] = useState("Input task");
    
    const onSubmitForm = async e => {
        // e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
          <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" 
            className="form-control add_task"
            placeholder = "Input subtask"
            
            value={description} 
            onChange={e =>
            setDescription(e.target.value)}/>
            
            <button className="btn btn-success add_button"> Add</button>
        </form>
        </ Fragment>
    );
};
*/
export default InputSubtasks;