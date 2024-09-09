import React, { useEffect, useState } from "react";
import "./FoodItem.css"; // Importing the CSS file for styling

const FoodItem = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4040/api/fooditems/all") 
      .then((response) => response.json())
      .then((data) => setFoodItems(data))
      .catch((error) => console.error("Error fetching food items:", error));
  }, []);

  return (
    <div className="food-item-container">
      <h2>Food Items List</h2>
      <table className="food-item-table">
        <thead>
          <tr>
            <th>Food ID</th>
            <th>Food Name</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.length > 0 ? (
            foodItems.map((item) => (
              <tr key={item.foodID}>
                <td>{item.foodID}</td>
                <td>{item.foodName}</td>
                <td>{item.price}</td>
                <td>{item.availability ? "Available" : "Unavailable"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No food items available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FoodItem;
