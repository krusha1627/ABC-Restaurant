import React, { useEffect, useState } from "react";
import "./Query.css"; // Importing the CSS file for styling

import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const Query = () => {
  const [queries, setQueries] = useState([]);
  const isAdmin = ApiService.isAdmin();
  const navigate = useNavigate();

  // Fetching the list of queries
  useEffect(() => {
    fetch("http://localhost:4040/api/queries") 
      .then((response) => response.json())
      .then((data) => setQueries(data))
      .catch((error) => console.error("Error fetching queries:", error));
  }, []);

  // Handle the "Add New Query" button click
  const handleAddQueryClick = () => {
    if (ApiService.isAdmin()) {
      navigate('/admin/add-query'); 
    } else {
      alert('Login as Admin to add a new query.');
    }
  };

  // Handle deleting a query
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this query?")) {
      fetch(`http://localhost:4040/api/queries/${id}`, {
        method: 'DELETE',
      })
      .then(() => {
        setQueries(queries.filter(query => query.id !== id)); // Remove query from list
      })
      .catch((error) => console.error("Error deleting query:", error));
    }
  };

  // Handle replying to a query
  const handleReply = (id) => {
    navigate(`/replyquery/{id}`);  // Redirect to reply page with query ID
  };

  return (
    <div className="food-item-container">  {/* Reusing the container class */}
      <h2>Query List</h2>
      
      <table className="food-item-table">  {/* Reusing the table class */}
        <thead>
          <tr>
            <th>Query ID</th>
            <th>Sender Name</th>
            <th>Query</th>
            <th>Sender Email</th>
            <th>Reply</th>
            <th>Action</th>  {/* New Action Column */}
          </tr>
        </thead>
        <tbody>
          {queries.length > 0 ? (
            queries.map((query) => (
              <tr key={query.id}>
                <td>{query.id}</td>
                <td>{query.senderName}</td>
                <td>{query.query}</td>
                <td>{query.senderEmail}</td>
                <td>{query.replyToQuery || "No reply yet"}</td>
                <td>
                  <button onClick={() => handleReply(query.id)}>Reply</button> {/* Reply Button */}
                  <button onClick={() => handleDelete(query.id)} style={{ marginLeft: '10px' }}>Delete</button> {/* Delete Button */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No queries available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Query;
