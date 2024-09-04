import CodeBase from "../assets/CodeBase";
import Data from "./JsData";
import 'bootstrap/dist/css/bootstrap.min.css';

function JavascriptLogics() {
  // Find data for each difficulty level
  const easyData = Data.find(item => item.type === 'easy') || { header: 'Easy', content: '' };
  const mediumData = Data.find(item => item.type === 'medium') || { header: 'Medium', content: '' };
  const hardData = Data.find(item => item.type === 'hard') || { header: 'Hard', content: '' };

  return (
    <div className="container my-5">
      <div className="col mb-4">
        <div className="col bg-success">
          <h2 className="text-light mb-2">{easyData.header}</h2>
          <CodeBase  header={easyData.header} content={easyData.content} />
        </div>
      </div>

      <div className="col mb-4">
        <div className="col bg-warning">
          <h2 className="text-light mb-2">{mediumData.header}</h2>
          <CodeBase header={mediumData.header} content={mediumData.content} />
        </div>
      </div>

      <div className="col">
        <div className="col bg-danger">
          <h2 className=" text-light mb-2">{hardData.header}</h2>
          <CodeBase header={hardData.header} content={hardData.content} />
        </div>
      </div>
    </div>
  );
}

export default JavascriptLogics;
