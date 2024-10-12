 import { useRef } from "react"
 import CodeBase from "../../../assets/CodeBase"
 import Data from "../../Data"
  const Useref = () => {
    const refContainer = useRef(null)
    const divContainer = useRef(null)
    const handleSubmit = (e ) => {
        e.preventDefault()
     console.log(refContainer.current.value)
     console.log(divContainer.current)
    }
    const useref = Data.find(item => item.type === 'useref') || { header: 'useref', content: '' };

    return (
      <>
       <div className="bg-success text-light"> <form onSubmit= {handleSubmit}>
          <div>
             <input type="text" ref={refContainer} />
          </div>
          <div ref={divContainer}> </div>
        </form>
     {refContainer.current.value} 
     <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"></img>
     <CodeBase header={useref.header} content={useref.content} />

     </div></>
    )
    } 
    export default Useref
