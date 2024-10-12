/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';

const DetailCard = ({ name, description, date, onEdit, onDelete }) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">Date: {date}</small>
        </p>
        <div>
          <button className="btn btn-warning me-2" onClick={onEdit}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const AddNewComponentForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [components, setComponents] = useState(() => {
    // Initialize from local storage if available
    const storedComponents = localStorage.getItem("components");
    return storedComponents ? JSON.parse(storedComponents) : [];
  });
  const [isEditing, setIsEditing] = useState(null);

  // Store components in local storage on update
  useEffect(() => {
    localStorage.setItem("components", JSON.stringify(components));
  }, [components]);

  // Function to get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString(); // Formats the date and time
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDateTime = getCurrentDateTime();

    if (isEditing !== null) {
      // If editing, update the specific component
      const updatedComponents = components.map((component, index) =>
        index === isEditing
          ? { ...component, name, description }
          : component
      );
      setComponents(updatedComponents);
      setIsEditing(null);
    } else {
      // If not editing, add a new component
      const newComponent = { name, description, date: currentDateTime };
      setComponents([...components, newComponent]);
    }

    setName("");
    setDescription("");
  };

  const handleEdit = (index) => {
    const component = components[index];
    setName(component.name);
    setDescription(component.description);
    setIsEditing(index);
  };

  const handleDelete = (index) => {
    const updatedComponents = components.filter((_, i) => i !== index);
    setComponents(updatedComponents);
  };

  return (
    <div className="container my-5">
      <h2>{isEditing !== null ? "Edit Component" : "Add New Component"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing !== null ? "Update Component" : "Add Component"}
        </button>
      </form>

      <h3 className="my-4">Components List</h3>
      {components.length === 0 ? (
        <p>No components added yet.</p>
      ) : (
        components.map((component, index) => (
          <DetailCard
            key={index}
            name={component.name}
            description={component.description}
            date={component.date}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
          />
        ))
      )}
    </div>
  );
};
 
const Today = () => {
  return (
    <div>
      <AddNewComponentForm/>
    </div>
  )
}

export default Today
