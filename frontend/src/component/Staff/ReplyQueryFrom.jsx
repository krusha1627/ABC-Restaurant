import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService'; // Assuming you have an API service to make requests


const ReplyQueryForm = () => {
  const { id } = useParams(); // Get the query ID from the URL
  const [query, setQuery] = useState(null); // Store query details
  const [reply, setReply] = useState(''); // Store the reply message
  const navigate = useNavigate();

  // Fetch query details by ID
  useEffect(() => {
    fetch(`http://localhost:4040/api/queries/${id}`)
      .then(response => response.json())
      .then(data => setQuery(data))
      .catch(error => console.error('Error fetching query:', error));
  }, [id]);

  // Handle reply submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the reply to the backend
    fetch(`http://localhost:4040/api/queries/${id}/reply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ replyToQuery: reply }),
    })
      .then(response => {
        if (response.ok) {
          alert('Reply sent successfully!');
          navigate('/queries'); // Redirect back to the query list
        } else {
          alert('Failed to send reply.');
        }
      })
      .catch(error => console.error('Error replying to query:', error));
  };

  return (
    <div className="reply-query-container">
      <h2>Reply to Query</h2>

      {/* Show query details if available */}
      {query ? (
        <div className="query-details">
          <p><strong>Query ID:</strong> {query.id}</p>
          <p><strong>Sender Name:</strong> {query.senderName}</p>
          <p><strong>Sender Email:</strong> {query.senderEmail}</p>
          <p><strong>Query:</strong> {query.query}</p>
        </div>
      ) : (
        <p>Loading query details...</p>
      )}

      {/* Reply form */}
      <form onSubmit={handleSubmit} className="reply-form">
        <div className="form-group">
          <label htmlFor="reply">Reply:</label>
          <textarea
            id="reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            rows="4"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Send Reply</button>
      </form>
    </div>
  );
};

export default ReplyQueryForm;
