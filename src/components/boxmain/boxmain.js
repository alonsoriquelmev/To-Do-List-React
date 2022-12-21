import React, {useState} from 'react'
import './styles.css'
import { TaskBox } from '../workbox/workbox'
export const BoxMain = () => {
  const [inputList, setInputList] = useState([]);
  const [stringDescription, setDescription] = useState("");
  const [stringTitle,setTitle] = useState("");

  const changeTitle = (title) => {
    setTitle(title);
  }

  const changeDescription = (description) => {
    setDescription(description);
  }

  const newTask = event => {
    setInputList(inputList.concat(<TaskBox key={inputList.length} />));
  };
  
  return (
    <div className="main-box">
        <input className="form-control" id="id-title" placeholder="tarea a realizar" value={stringTitle} onChange={(e) => changeTitle(e.target.value)}></input>
        <input className="form-control" id="id-description" placeholder="descripción de la tarea" value={stringDescription} onChange={(e) => changeDescription(e.target.value)}></input>
        <button className="button-1" onClick={newTask}>Agregar</button>
        <div className="tasks-container">
          {inputList}
        </div>
    </div>
  );
}
