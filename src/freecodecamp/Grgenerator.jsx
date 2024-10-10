import {useState} from 'react'
import QRCode from "react-qr-code";
const Grgenerator = () => {
const [input, setInput] = useState("")
const [generate, setGenerate] = useState("")

const handleGenerate=()=>{
setGenerate(input)
}
  return (
    <div>
    <div>  <input
      onChange={(e)=>setInput(e.target.value)}
      type='input'
      name='qr-code'
      /> <button onClick={handleGenerate}      disabled={input.trim()=="" ? true: false}
>Generate</button></div>
      <div><QRCode value={generate} /></div>
       
    </div>
  )
}

export default Grgenerator
