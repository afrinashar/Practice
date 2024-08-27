import { useState } from "react";
import Button from "../assets/Button";
export const Todo = () => {
  const [update, setUpdate] = useState("");
  const [add, setAdd] = useState([]);
  const addTodo = () => {
    const updated = [...add, update];
    setAdd(updated);
    setUpdate("");
  };
  const updateTodo = (value) => {
    setUpdate(value);
  };
  const onDelete = (index) => {
    const newTaskList = [...add];
    newTaskList.splice(index, 1);
    setAdd(newTaskList);
  };
  console.log(update, "add", add);
  return (
    <>
      <div style={{ backgroundColor: "#FFD75F", color: "#831212" }}>
        {" "}
        <div>Todo</div>
        <input
          value={update}
          onChange={(e) => updateTodo(e.target.value)}
        ></input>
        <input style ={{backgroundColor:"#831212", color:"#FFD75F"}} type="submit" onClick={() => addTodo()}></input>
        <ul>
           
          {add.map((data, index) => {
            return (
              <div key={index}>
                {data}{" "}
                <Button
                  style={{
                    backgroundColor: "#831212",
                    color: "#FFD75F",
                    padding: "1px",
                  }}
                  onClick={() => onDelete(index)}
                
                    text='🗑️'
                  />
              </div>
            );
          })}
        </ul>
      </div>{" "}
    </>
  );
};
