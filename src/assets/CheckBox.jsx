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
