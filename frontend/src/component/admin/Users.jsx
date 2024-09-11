import React, { useEffect, useState } from "react";


import { Link, useNavigate } from 'react-router-dom';

import ApiService from '../../service/ApiService';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const isAdmin = ApiService.isAdmin();
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("http://localhost:4040/api/users/all") 
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleAddUserClick = () => {
    if (ApiService.isAdmin()) {
      navigate('/admin/add-user'); 
    } else {
      alert('Login as Admin to add a new user.');
    }
  };

  return (
    <div className="user-list-container">
      <h2>Users List</h2>
      {isAdmin && <button onClick={handleAddUserClick}>Add New User</button>}
      <table className="user-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
