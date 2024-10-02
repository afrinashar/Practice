 
 import "./styles.css"
import concepts from "./Nodedata"
import CodeBase from "../assets/CodeBase"
 const NodeInterview = () => {
 return (
   <div>
      <div className="my-5">
     <h2 className="text-center mb-4">Node interview</h2>
     <div className="row">
       {concepts.map(concept => (
         <div className="col-md-4 mb-4" key={concept.id}>
           <div className={`card h-100 card card-hover`}>
             <div className="card-body">
               <h5 className="card card-hover">{concept.title}</h5>
               <p className="card-text">{concept.description}...</p>
                <CodeBase  header={concept.title} content={concept.example} />
               </div>
           </div>
         </div>
       ))}
     </div>
   </div>
   </div>
 )
}

export default NodeInterview

