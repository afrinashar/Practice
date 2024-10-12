import { useState } from "react";
import llmQuestions from "./LlmData";
import promptEngineeringQuestions from "./Prompt";
import pythonQuestions from "./Python";
import mlQuestions from "./Ml";
import differentialCalculusQuestions from "./Math";
import neuralNetworkQuestions from "./Nnm";
import pytorchQuestions from "./Pytourch";
import pandasQuestions from "./Pandas";
import tensorflowQuestions from "./Tensorflow";
import opencvQuestions from "./Opencv";
import numpyQuestions from "./Numpy";
import statisticsQuestions from "./Static";
import CodeBase from "../assets/CodeBase";
 const AiConcepts = () => {
    const [selectedValue, setSelectedValue] = useState( llmQuestions);
    const concepts = [
        { id: 1, title: "llm", description: "Large Language Model", data: llmQuestions },
        { id: 2, title: "prompt", description: "Crafting prompts", data: promptEngineeringQuestions },
        { id: 3, title: "python", description: "Python basics and advanced", data: pythonQuestions },
        { id: 4, title: "ml", description: "ML Concepts", data: mlQuestions },
        { id: 5, title: "math", description: "Math Calculus", data: differentialCalculusQuestions },
        { id: 6, title: "nn", description: "Neural Network Concepts", data: neuralNetworkQuestions },
        { id: 7, title: "torch", description: "PyTorch Framework", data: pytorchQuestions },
        { id: 8, title: "pandas", description: "Pandas for Data Analysis", data: pandasQuestions },
        { id: 9, title: "tensor", description: "TensorFlow Framework", data: tensorflowQuestions },
        { id: 10, title: "cv", description: "Computer Vision with OpenCV", data: opencvQuestions },
        { id: 11, title: "numpy", description: "NumPy for Array Handling", data: numpyQuestions },
        { id: 12, title: "static", description: "Statistics Concepts", data: statisticsQuestions },
      ];
    const handleChange = (event) => {
         let Value=event.target.value
         const concept = concepts.find((concept) => concept.title === Value);
    
         if (concept) {
           setSelectedValue(concept.data);  
         } 
        console.log('Selected value:',  selectedValue, concept);
    };
  return (
    <div>
      <select onChange={handleChange}  value={selectedValue}>
        <option value="llm">  Questions</option>
        <option value="ml">ML Questions</option>
        <option value="nn">Neural Networks</option>
        <option value="math">Maths</option>
        <option value="python">Python</option>
        <option value="tourch">PyTorch</option>
        <option value="tensor">Tensorflow</option>
        <option value="numpy">NumPy</option>
        <option value="pandas">Pandas</option>
        <option value="cv">OpenCV</option>
        <option value="static">Statistics</option>
      </select>

      <div className="my-5">
        <h2 className="text-center mb-4"> </h2>
        <div className="row">
          {selectedValue.map((concept) => (
            <div className="col-md-4 mb-4" key={concept.id}>
              <div className={`card h-100 card card-hover`}>
                <div className="card-body">
                  <h5 className="card card-hover">{concept.title}</h5>
                  <p className="card-text">{concept.description}...</p>
                  <CodeBase header={concept.title} content={concept.example} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiConcepts;
