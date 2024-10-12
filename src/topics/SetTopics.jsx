/* eslint-disable no-undef */
 import "./styles.css"
 import concepts from "./TopicData"
 import concept from "./TopixData1"

import CodeBase from "../assets/CodeBase"
const SetTopics = () => {
  return (
    <div>
       <div className="my-5">
      <h2 className="text-center mb-4">JavaScript & React Concepts</h2>
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
      <h2 className="text-center mb-4"> React Concepts</h2>

      <div className="row">
        {concept.map(concept => (
          <div className="col-md-4 mb-4" key={concept.id}>
            <div className={`card bg-info h-100 card card-hover`}>
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

export default SetTopics
