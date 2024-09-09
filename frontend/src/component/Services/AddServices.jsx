import React, { useState } from "react";
import axios from "axios"; 
import "./AddService.css"; 

const AddService = () => {
  const [service, setService] = useState({
    description: "",
    img: "",
    title: "",
  });

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Post request to API endpoint
    axios
      .post("http://localhost:4040/api/services/add", service)
      .then((response) => {
        alert("Service added successfully!");
        setService({ description: "", img: "", title: "" });
      })
      .catch((error) => {
        console.error("Error adding service:", error);
        alert("Failed to add service");
      });
  };

  return (
    <div className="add-service-container">
      <h2>Add New Service</h2>
      <form onSubmit={handleSubmit} className="add-service-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={service.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={service.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="img">Image URL:</label>
          <input
            type="text"
            id="img"
            name="img"
            value={service.img}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
