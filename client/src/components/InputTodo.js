import React, { Fragment,useState } from "react";


const InputToDo = () => {
    const [description, setDescription] = useState("");
    
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            if (description === "") {
                // do nothing
            } else {
                const body = { description };
                const response = await fetch("http://localhost:5000/todos", {
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });
                document.querySelector(".add_task").value = "";
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
          <form className="d-flex" onSubmit={onSubmitForm} >
            <input type="text"
            className="form-control add_task" 
            placeholder= "Input task"
            onChange={e =>
            setDescription(e.target.value)}
            autoComplete="off"/>
            
            <button className="btn btn-success add_button"> Add</button>
        </form>
        </ Fragment>
    );
};

export default InputToDo;
