import React, { useState } from 'react';

const MakeDelivery = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    address: '',
    deliveryDate: '',
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Delivery Details Submitted:', formData);

    // Reset form after submission
    setFormData({
      recipientName: '',
      address: '',
      deliveryDate: '',
      instructions: '',
    });
  };

  return (
    <div className="edit-room-container">
      <h2>Make a Delivery</h2>
      <div className="edit-room-form">
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
          <label>Delivery Date</label>
          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Special Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="update-button" onClick={handleSubmit}>
          Submit Delivery
        </button>
      </div>
    </div>
  );
};

export default MakeDelivery;
