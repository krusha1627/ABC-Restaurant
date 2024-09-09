import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ApiService from '../../service/ApiService';


function Services() {
  const [services, setServices] = useState([]);
 
  const serviceImage1 = "./assets/images/dine-in.jpg";
  const serviceImage2 = "./assets/images/home_delivery.jpg";
  const serviceImage3 = "./assets/images/catering.png";
  useEffect(() => {
    fetch('http://localhost:4040/api/services')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched services:', data); 
        setServices(data);
      })
      .catch((error) => console.error('Error fetching services:', error));
  }, []);


  const navigate = useNavigate(); 

  const handleDeliveryClick = () => {
    if (ApiService.isUser()) {
      navigate('/delivery'); // Navigate to /Delivery route when image is clicked
    } else {
      alert('Register or login to make a delivery');
    }
  };

  const handleRoomClick = () => {
    if (ApiService.isUser()) {
      navigate('/rooms'); // Navigate to /Banquet Halls or Private Dine-in rooms route when image is clicked
    } else {
      alert('Register or login to book a banquet hall or a private dine-in room.');
    }
  };

  const handleDineInClick = () => {
    if (ApiService.isUser()) {
      navigate('/'); // Navigate to /Dine-in route when image is clicked
    } else {
      alert('Register of login to reserve a table');
    }
  };

  return (
    <div
  className='services-page'
  
>
      <header className='height-75'>
        <div>
        
        </div>
      </header>
      <div style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <p>Explore our range of exquisite services designed to offer you an unforgettable dining experience.</p>
        <div style={styles.services}>
          <div style={styles.serviceCard}>
            <img src={serviceImage1} alt="Service 1" style={styles.serviceImage} />
            <h3 style={styles.serviceTitle}>Dine-In</h3>
            <p style={styles.serviceText}>Experience our exquisite dining experience in a luxurious environment.</p>
          </div>
          <div style={styles.serviceCard} onClick={handleDeliveryClick}>
            <img src={serviceImage2} alt="Service 2" style={styles.serviceImage} />
            <h3 style={styles.serviceTitle}>Delivery</h3>
            <p style={styles.serviceText}>Enjoy our gourmet meals delivered right to your doorstep.</p>
          </div>
          <div style={styles.serviceCard} onClick={handleRoomClick}>
            <img src={serviceImage3} alt="Service 3" style={styles.serviceImage} />
            <h3 style={styles.serviceTitle}>Banquet Halls / Private Dine-in rooms</h3>
            <p style={styles.serviceText}>Book our Banquet Hall or Private Dining Rooms for an unforgettable day of exclusive events.</p>
          </div>
        </div>
      </div>

      <div style={styles.servicesSection}>
      <div style={styles.container}>
      <h2 style={styles.sectionTitle} >Additional Services</h2>
        <div style={styles.services}>
          
          {services.map((service) => (
            <div key={service.id} style={styles.serviceCard}>
              <Link to={`/services/${service.id}`} style={{ textDecoration: 'none' }}>
                <Card style={{ backgroundColor: styles.serviceCard.backgroundColor, color: styles.serviceText.color, border: 'none' }}>
                  <Card.Img variant="top" height='200px' src={service.img} style={styles.serviceImage} />
                  <Card.Body >
                    <Card.Title  style={styles.serviceTitle}>{service.title}</Card.Title>
                    <Card.Text  style={styles.serviceText}>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#5D4037', // Earthy brown color for the text
    backgroundColor: '#F5F5DC', // Beige background for the entire page
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '4rem',
    color: '#8B4513', // Terracotta color for the heading
    marginBottom: '10px',
  },

  servicesSection: {
    padding: '50px 20px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '36px',
    color: '#8B4513', // Terracotta color for section titles
    marginBottom: '30px',
    margin:'20px',
  },
  sectionText: {
    color: '#5D4037', // Earthy brown color for section text
  },
  services: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  serviceCard: {
    width: '300px',
    margin: '20px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(93, 64, 55, 0.5)', // Earthy brown shadow for the cards
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#D2B48C', // Light brown background for the service cards
  },
  serviceImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  serviceTitle: {
    color: '#8B4513', // Terracotta color for service titles
  },
  serviceText: {
    color: '#5D4037', // Earthy brown color for service descriptions
  },
 
 
};


export default Services;
