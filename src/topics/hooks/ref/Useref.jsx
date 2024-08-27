 import { useRef } from "react"
export const Useref = () => {
    const refContainer = useRef(null)
    const divContainer = useRef(null)
    const handleSubmit = (e ) => {
        e.preventDefault()
     console.log(refContainer.current.value)
     console.log(divContainer.current)
    }
     
    return (
      <>
        <form onSubmit= {handleSubmit}>
          <div>
             <input type="text" ref={refContainer} />
          </div>
          <div ref={divContainer}> </div>
        </form>
     {refContainer.current.value} 
     <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"></img>
     </>
    )
    } 
