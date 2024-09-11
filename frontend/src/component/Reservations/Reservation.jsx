import React, { useState, useEffect } from 'react';
import './Reservation.css';  

const MakeReservation = () => {
  const [formData, setFormData] = useState({
    reservationType: 'dine-in',
    recipientName: '',
    address: '',
    deliveryTime: '',
    inTime: '',
    outTime: '',
    selectedFoods: [],
    instructions: '',
  });

  const [availableFoodItems, setAvailableFoodItems] = useState([]);
  const [selectedFood, setSelectedFood] = useState('');

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch('http://localhost:4040/api/fooditems/all'); 
        if (!response.ok) {
          throw new Error('Failed to fetch food items');
        }
        const data = await response.json();
        setAvailableFoodItems(data); 
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFoodChange = (e) => {
    setSelectedFood(e.target.value);
  };

  const handleAddFood = () => {
    if (selectedFood) {
      setFormData((prevData) => ({
        ...prevData,
        selectedFoods: [...prevData.selectedFoods, selectedFood],
      }));
      setSelectedFood('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending the data to the backend API
    try {
      const response = await fetch('http://localhost:4040/api/reservations/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert formData to JSON format
      });

      if (!response.ok) {
        throw new Error('Failed to submit reservation');
      }

      const result = await response.json();
      console.log('Reservation submitted successfully:', result);

      // Reset form after successful submission
      setFormData({
        reservationType: 'dine-in',
        recipientName: '',
        address: '',
        deliveryTime: '',
        inTime: '',
        outTime: '',
        selectedFoods: [],
        instructions: '',
      });
    } catch (error) {
      console.error('Error submitting reservation:', error);
    }
  };

  return (
    <div className="edit-room-container">
      <h2>Make a Reservation</h2>
      <div className="edit-room-form">
        <div className="form-group">
          <label>Reservation Type</label>
          <select
            name="reservationType"
            value={formData.reservationType}
            onChange={handleChange}
          >
            <option value="dine-in">Dine-In</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>

        {formData.reservationType === 'delivery' && (
          <>
            <div className="form-group">
              <label>Recipient Name</label>
              <input
                type="text"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Delivery Time</label>
              <input
                type="time"
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {formData.reservationType === 'dine-in' && (
          <>
            <div className="form-group">
              <label>In Time</label>
              <input
                type="time"
                name="inTime"
                value={formData.inTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Out Time</label>
              <input
                type="time"
                name="outTime"
                value={formData.outTime}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <div className="form-group">
          <label>Select Food Item</label>
          <div className="food-selection-container">
            <select
              name="foodItems"
              value={selectedFood}
              onChange={handleFoodChange}
            >
              <option value="" disabled>
                Select Food
              </option>
              {availableFoodItems.map((item) => (
                <option key={item.foodID} value={item.foodName}>
                  {item.foodName}
                </option>
              ))}
            </select>
            <button type="button" onClick={handleAddFood}>
              Add Food
            </button>
          </div>
        </div>

        {formData.selectedFoods.length > 0 && (
          <div className="form-group">
            <label>Selected Food Items</label>
            <ul>
              {formData.selectedFoods.map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="form-group">
          <label>Special Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="update-button" onClick={handleSubmit}>
          Submit Reservation
        </button>
      </div>
    </div>
  );
};

export default MakeReservation;
