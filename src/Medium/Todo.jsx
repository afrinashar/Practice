import { useState } from 'react'

export const Todo = () => {
    const [update,setUpdate]=useState("")
    const [add,setAdd]=useState([])
const addTodo=()=>{
    const updated=[...add, update]
    setAdd(updated)
   setUpdate("")
}
    const updateTodo=(value)=>{
        setUpdate(value)
    }
    const onDelete=(index)=>
    {
        const newTaskList = [...add];
    newTaskList.splice(index, 1);
    setAdd(newTaskList)
     }
    console.log(update,"add",add);
  return (<>
    <div>Todo</div>
    <input  value={update} onChange={(e)=>updateTodo(e.target.value)} ></input>
    <input type='submit' onClick={()=>addTodo()} ></input>
    <ul> {add.map((data,index)=>{return(<li key={index}>{data}  <button style={{backgroundColor:"red", color:"red", padding:"1px"}} onClick={()=>onDelete(index)}  ><span style={{color:"red"}}>🗑️</span></button></li>)})}</ul>
  </>)
}
