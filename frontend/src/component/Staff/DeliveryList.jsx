import React, { useState, useEffect } from 'react';


const DeliveryList = () => {
  const [deliveryReservations, setDeliveryReservations] = useState([]);

  useEffect(() => {
    const fetchDeliveryReservations = async () => {
      try {
        const response = await fetch('http://localhost:4040/api/reservations/delivery'); 
        if (!response.ok) {
          throw new Error('Failed to fetch delivery reservations');
        }
        const data = await response.json();
        setDeliveryReservations(data);
      } catch (error) {
        console.error('Error fetching delivery reservations:', error);
      }
    };

    fetchDeliveryReservations();
  }, []);

  return (
    <div className="reservation-list-container">
      <h2>Delivery Reservations</h2>
      {deliveryReservations.length === 0 ? (
        <p>No delivery reservations found.</p>
      ) : (
        <ul className="reservation-list">
          {deliveryReservations.map((reservation) => (
            <li key={reservation.id} className="reservation-item">
              <p><strong>Recipient Name:</strong> {reservation.recipientName}</p>
              <p><strong>Address:</strong> {reservation.address}</p>
              <p><strong>Delivery Time:</strong> {reservation.deliveryTime}</p>
              <p><strong>Selected Foods:</strong> {reservation.selectedFoods.join(', ')}</p>
              <p><strong>Instructions:</strong> {reservation.instructions}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeliveryList;
