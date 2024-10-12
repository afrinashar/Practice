<<<<<<< HEAD
import React, { useState } from 'react'

export const CheckBox = () => {
    const [checked,setChecked]=useState(true)
   const  checkboxClick=()=>{
        setChecked(!checked)
    }
  return (<>
    <div>CheckBox</div>
    <input type='checkbox' checked={checked} onClick={()=>checkboxClick()}></input>
    {checked==true?"checked":"unchecked"}
 </> )
}
=======
import React, { useState } from 'react'

export const CheckBox = () => {
    const [checked,setChecked]=useState(true)
   const  checkboxClick=()=>{
        setChecked(!checked)
    }
  return (<>
    <div>CheckBox</div>
    <input type='checkbox' checked={checked} onClick={()=>checkboxClick()}></input>
    {checked==true?"checked":"unchecked"}
 </> )
}
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
