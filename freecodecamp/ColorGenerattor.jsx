import { useState, useEffect } from "react";
export const ColorGenerattor = () => {
  const [hexs, setHexs] = useState("");
  const [rgb, setRgb] = useState("");
  const [color, setColor] = useState("");

  function Random(length) {
    return Math.floor(Math.random() * length);
  }
  const handleHex = () => {
    let Hex = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let start = "#";
    for (let i = 0; i < 6; i++) {
      start += Hex[Random(Hex.length)];
    }
    console.log(start);
    setHexs(start);
  };
  const handleRgb=()=>{
let r=Random(256)
let g =Random(256)
let b =Random(256)
let RGB=`rgb(${r},${g},${b})`
setRgb(RGB)

  }
  let typeColor
  useEffect(() => {
     
     typeColor =(color=="hex")?hexs:rgb
if(typeColor=="hex") handleHex
else handleRgb
    
  }, [typeColor])
  
  return (
    <>
      <div>ColorGenerattor</div>
      {hexs}{rgb}
      <button onClick={()=>setColor("hex")}>HEX</button>
      <button onClick={()=>setColor("rgb")}>RGB</button>
      <div 
      style={{backgroundColor:`${typeColor}`, width:"500px", height:"500px"}}
      ></div>
    </>
  );
};
