/* eslint-disable react/prop-types */
import { useState } from "react"
import Input from "../../assets/Input";
import Includes from "../../methods/Includes";
const CountVowels = () => {
  const [vowels, setVowels] = useState([])
  
  const handleInputChange = (inputValue) => {
    setVowels(inputValue.split(''));
  }

  return (
    <div>
        <h1>Count VOWELS</h1>
        <Input onInputChange={handleInputChange}/>
     
      <GetVowelsCount vowelArray={vowels} />
    </div>
  )
}

export default CountVowels

function GetVowelsCount({ vowelArray }) {
  const vowelCount = vowelArray.filter(char => Includes('aeiouAEIOU', char)).length;

  return (
    <>
      <p>Input array: [{vowelArray.join(', ')}]</p>
      <p>Vowel count: {vowelCount}</p>
    </>
  )
}