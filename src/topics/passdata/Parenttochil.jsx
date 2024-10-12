<<<<<<< HEAD
import  { useState } from 'react';

function ParentComponent() {
  const [data, setData] = useState();
const increase =()=>{
   setData( data + 1)
}
  return<><input onClick={increase}  ></input> <ChildComponent data={data} /></>;
}

function ChildComponent({ data }) {
  return <div>{data}</div>;
}
=======
import  { useState } from 'react';

function ParentComponent() {
  const [data, setData] = useState();
const increase =()=>{
   setData( data + 1)
}
  return<><input onClick={increase}  ></input> <ChildComponent data={data} /></>;
}

function ChildComponent({ data }) {
  return <div>{data}</div>;
}
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
export default ParentComponent