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
export default ParentComponent