/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const DetailCard = ({ name, title, description, type, date, onEdit, onDelete }) => {
    return (
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            URL: <a href={title} target="_blank" rel="noopener noreferrer">{title}</a>
          </p>
          <p className="card-text">Description: {description}</p>
          <p className="card-text">Type: {type}</p>
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
  const [title, setTitle] = useState(""); // New field for title or URL
  const [description, setDescription] = useState("");
  const [type, setType] = useState(""); // New field for type
  const [links, setComponents] = useState(() => {
    const storedComponents = localStorage.getItem("links");
    return storedComponents ? JSON.parse(storedComponents) : [];
  });
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString(); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDateTime = getCurrentDateTime();

    if (isEditing !== null) {
      const updatedComponents = links.map((component, index) =>
        index === isEditing
          ? { ...component, name, title, description, type }
          : component
      );
      setComponents(updatedComponents);
      setIsEditing(null);
    } else {
      const newComponent = { name, title, description, type, date: currentDateTime };
      setComponents([...links, newComponent]);
    }

    setName("");
    setTitle(""); // Reset the title field
    setDescription("");
    setType(""); // Reset the type field
  };

  const handleEdit = (index) => {
    const component = links[index];
    setName(component.name);
    setTitle(component.title); // Populate the title field
    setDescription(component.description);
    setType(component.type); // Populate the type field
    setIsEditing(index);
  };

  const handleDelete = (index) => {
    const updatedComponents = links.filter((_, i) => i !== index);
    setComponents(updatedComponents);
  };

  return (
    <div className="container my-5">
      <h2>{isEditing !== null ? "Edit Component" : "Add New Component"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">URL</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
        <div className="mb-3">
          <label className="form-label">Type</label>
          <input
            type="text"
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing !== null ? "Update Component" : "Add Component"}
        </button>
      </form>

      <h3 className="my-4">links List</h3>
      {links.length === 0 ? (
        <p>No links added yet.</p>
      ) : (
        links.map((component, index) => (
          <DetailCard
            key={index}
            name={component.name}
            title={component.title} // Pass the title
            description={component.description}
            type={component.type} // Pass the type
            date={component.date}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
          />
        ))
      )}
    </div>
  );
};

const Links = () => {
  return (
    <div>
      <AddNewComponentForm />
    </div>
  );
};

export default Links;
