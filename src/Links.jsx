/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios"; // Use Axios for API requests

const API_BASE_URL = "http://localhost:5000/api/links"; // Replace with your API base URL

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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [links, setLinks] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  // Fetch links from the API
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(API_BASE_URL);
        setLinks(response.data); // Assume API returns an array of links
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };

    fetchLinks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newLink = { name, title, description, type, date: new Date().toLocaleString() };
  
    try {
      if (isEditing !== null) {
        // Update existing link
        const linkToUpdate = links[isEditing];
        await axios.put(`${API_BASE_URL}/${linkToUpdate._id}`, newLink); // Use `_id` from the database
        const updatedLinks = links.map((link, index) =>
          index === isEditing ? { ...link, ...newLink } : link
        );
        setLinks(updatedLinks);
        setIsEditing(null);
      } else {
        // Add new link
        const response = await axios.post(API_BASE_URL, newLink);
        setLinks([...links, response.data]); // Add the new link returned by the API
      }
      setName("");
      setTitle("");
      setDescription("");
      setType("");
    } catch (error) {
      console.error("Error saving link:", error);
    }
  };
  

  const handleEdit = (index) => {
    const link = links[index];
    setName(link.name);
    setTitle(link.title);
    setDescription(link.description);
    setType(link.type);
    setIsEditing(index); // Keep track of the index for updating the correct link
  };
  

  const handleDelete = async (index, id) => {
    if (!id) {
      console.error("Invalid ID:", id);
      return;
    }
  
    try {
      await axios.delete(`${API_BASE_URL}/${id}`); // Use the actual ID in the API call
      const updatedLinks = links.filter((_, i) => i !== index); // Remove the link from the list
      setLinks(updatedLinks);
    } catch (error) {
      console.error("Error deleting link:", error);
    }
  };
  
  

  return (
    <div className="container my-5">
      <h2>{isEditing !== null ? "Edit Link" : "Add New Link"}</h2>
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
          {isEditing !== null ? "Update Link" : "Add Link"}
        </button>
      </form>

      <h3 className="my-4">Links List</h3>
      {links && links.length > 0 ? (
  links.map((link, index) => (
    <DetailCard
      key={link._id} // Use the unique `_id` as the key
      name={link.name}
      title={link.title}
      description={link.description}
      type={link.type}
      date={link.date}
      onEdit={() => handleEdit(index)}
      onDelete={() => handleDelete(index, link._id)} // Pass `_id` to handleDelete
    />
  ))
) : (
  <p>No links available.</p>
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
