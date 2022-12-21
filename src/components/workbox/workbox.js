import React from 'react'

export const TaskBox = ({props}) => {
    const deleteTask = () => {
        
    };
    return(
        <div className="task-box">
            <h3 className="task-title">{props.title}</h3>
            <p className="task-description">{props.description}</p>
            <button className="btn btn-danger" onClick={deleteTask}>Eliminar</button>
        </div>
    );
}