import logo from './logo.svg';
import './App.css';
import {useState} from'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [task,setTask]=useState("")
  const[listTask,setListTask] =  useState([])
  const handleAdd = (e) => {
    e.preventDefault()
    setListTask([...listTask, {id:uuidv4(),desc:task,isDone:false}])
    setTask('')
  }

 const handleDelete = (id) => {
   const newList = listTask.filter((item)=>item.id !== id)
   setListTask(newList)
 }
 
 const handleDone = (id) => {
  setListTask(listTask.map((e)=> 
  e.id == id ? {...e,isDone:!e.isDone}: e
  ) )
 }
 
  
  return (
    <div className="App">
      <input placeholder="set your task" name="task" value={task} onChange={(e)=>setTask(e.target.value)}/> 
      <button onClick={handleAdd}>Add</button>
      <div>
          {listTask.map((elt) => (
            <>
              <p style={{
  textDecoration: elt.isDone ? 'line-through' : 'none'
}}>{elt.desc}</p>
              <button onClick={()=>{handleDelete(elt.id)}}>Delete</button> 
              <button onClick={()=>{handleDone(elt.id)}}>Done</button>
            </>
          ))}
          
       
        
      </div>
    </div>
  );
}

export default App;
