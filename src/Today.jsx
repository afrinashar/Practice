/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import axios from 'axios';
const API_BASE_URL = "https://practice-api-f02y.onrender.com/api/today";  

const DetailCard = ({ name, description, date, onEdit, onDelete }) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">Date: {new Date(date).toLocaleString()}</small>
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
   const [links, setLinks] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  // Store components in local storage on update
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
  
    const newLink = { name,  description,   date: new Date().toLocaleString() };
  
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
       setDescription("");
     } catch (error) {
      console.error("Error saving link:", error);
    }
  };
  

  const handleEdit = (index) => {
    const link = links[index];
    setName(link.name);
    setDescription(link.description);
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
  
console.log(links,"link");

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
 
 
const Today = () => {
  return (
    <div>
      <AddNewComponentForm/>
    </div>
  )
}

export default Today
