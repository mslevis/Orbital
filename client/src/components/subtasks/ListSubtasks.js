import React, { Fragment, useEffect, useState } from "react";

const ListSubtasks = ({todo}) => {

    const [subtaskList, setSubtaskList] = useState([]);
    const [subtaskDescrip, setSubtaskDescript] = useState("");
    
    const getSubtasks = async (id) => {
        try {
            // Calls the get ALL subtasks route method
            const response = await fetch(`http://localhost:5000/subtasks/${id}`);
            const jsonData = await response.json();
            console.log(jsonData);
            setSubtaskList(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const updateSubtask = async (subtask_id) => {
        try {
            // Calls the UPDATE subtask route method
            const tobeSubmitted = { subtaskDescrip };
            const deleteTodo = await fetch(`http://localhost:5000/subtasks/${todo.todo_id}/${subtask_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(tobeSubmitted)
            });
        } catch (err) {
            console.error(err.message);
        }
    }

    const deleteTodo = async (id, subtask_id) => {
        try {
            // Calls the DELETE subtask route method
            const deleteTodo = await fetch(`http://localhost:5000/subtasks/${id}/${subtask_id}`, {
                method: "DELETE"
            });
            
            setSubtaskList(subtaskList.filter(subtask => subtask.subtask_id !== subtask_id));
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getSubtasks(todo.todo_id);
    }, [subtaskList]);
    return (
    <Fragment>
        {" "}
        <table className="table mt-5 text-center">
            <tbody>
                {/*<tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr> <input type ='text' className="form-control" value ={description} onChange={e =>
                            setDescription(e.target.value)}/> 
                */}
                {subtaskList.map(subtask => (
                    <tr key={subtask.subtask_id}>
                        <td>
                            {subtask.description}
                            {/*(<form onSubmit={updateSubtask(subtask.subtask_id)}>
                                <input type = 'text' className="form-control" value={subtask.description} onChange={e => setSubtaskDescript(e.target.value)} /> 
                </form>)*/}
                            
                        </td>
                        <td>
                            <button className="btn btn-danger" 
                            onClick={() => deleteTodo(todo.todo_id, subtask.subtask_id)}
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

export default ListSubtasks;