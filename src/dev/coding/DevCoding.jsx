import CodeBase from "../../assets/CodeBase";
import concepts from "./Devdata";

const DevCoding = () => {
  return (
    <div className="my-5">
      <h2 className="text-center mb-4">JavaScript & React Concepts</h2>
      <div className="row">
        {concepts.map((concept) => (
          <div className="col-md-4 mb-4" key={concept.id}>
            <div className="card h-100 card-hover">
              <div className="card-body">
                <h5>{concept.title}</h5>
                <p className="card-text">{concept.description}...</p>
                <CodeBase header={concept.title} content={concept.example} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevCoding;
