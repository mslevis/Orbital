import React from 'react';

const EditButton = ({todo}) => {
    return (
        <button 
        type="button" 
        className="btn btn-warning" 
        data-toggle="modal" 
        data-target={`#id${todo.todo_id}`}>
        Edit
        </button>
    );
};

export default EditButton;