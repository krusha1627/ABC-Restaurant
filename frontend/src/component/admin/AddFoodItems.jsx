import React, { useState } from "react";
import axios from "axios";


const AddFoodItem = () => {
  const [foodItem, setFoodItem] = useState({
    foodID: "",
    foodName: "",
    price: "",
    availability: "1",
  });

  const handleChange = (e) => {
    setFoodItem({
      ...foodItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    axios
      .post("http://localhost:4040/api/fooditems/add", foodItem)
      .then((response) => {
        alert("Food item added successfully!");
        setFoodItem({ foodID: "", foodName: "", price: "", availability: "" });
      })
      .catch((error) => {
        console.error("Error adding food item:", error);
        alert("Failed to add food item");
      });
  };

  return (
    <div className="add-food-item-container">
      <h2>Add New Food Item</h2>
      <form onSubmit={handleSubmit} className="add-food-item-form">
        
        <div className="form-group">
          <label htmlFor="foodName">Food Name:</label>
          <input
            type="text"
            id="foodName"
            name="foodName"
            value={foodItem.foodName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={foodItem.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="availability">Availability:</label>
          <select
            id="availability"
            name="availability"
            value={foodItem.availability}
            onChange={handleChange}
            required
          >
            <option value="">Select Availability</option>
            <option value="1">Available</option>
            <option value="0">Unavailable</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Add Food Item</button>
      </form>
    </div>
  );
};

export default AddFoodItem;
