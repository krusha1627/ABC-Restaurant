import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const bannerImage = "./assets/images/res04.png";
const serviceImage1 = "./assets/images/dine-in.jpg";
const serviceImage2 = "./assets/images/home_delivery.jpg";
const serviceImage3 = "./assets/images/catering.png";

const Home = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleDeliveryClick = () => {
    navigate('/delivery'); // Navigate to /Delivery route when image is clicked
  };

  return (
    <div style={styles.container}>
      {/* Banner Section */}
      <div style={styles.banner}>
        <img src={bannerImage} alt="Restaurant Banner" style={styles.bannerImage} />
        <div style={styles.bannerText}>
          <h1 style={styles.heading}>Welcome to ABC Restaurant</h1>
          <p style={styles.paragraph}>Your Culinary Journey Begins Here</p>
          <button style={styles.exploreButton}>Explore Our Menu</button>
        </div>
      </div>

      {/* Services Section */}
      <div style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.services}>
          <div style={styles.serviceCard}>
            <img src={serviceImage1} alt="Service 1" style={styles.serviceImage} />
            <h3 style={styles.serviceTitle}>Dine-In</h3>
            <p style={styles.serviceText}>Experience our exquisite dining experience in a luxurious environment.</p>
          </div>

          {/* Delivery Service Card */}
          <div style={styles.serviceCard} onClick={handleDeliveryClick}>
            <img src={serviceImage2} alt="Service 2" style={styles.serviceImage} />
            <h3 style={styles.serviceTitle}>Delivery</h3>
            <p style={styles.serviceText}>Enjoy our gourmet meals delivered right to your doorstep.</p>
          </div>

          <div style={styles.serviceCard}>
            <img src={serviceImage3} alt="Service 3" style={styles.serviceImage} />
            <h3 style={styles.serviceTitle}>Event Catering</h3>
            <p style={styles.serviceText}>Let us cater your events with our exclusive dishes and services.</p>
          </div>
        </div>
        <button style={styles.offersButton}>
          <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
            View more
          </Link>
        </button>
      </div>

      {/* Offers Section */}
      <div style={styles.offersSection}>
        <h2 style={styles.sectionTitle}>Special Offers</h2>
        <p style={styles.sectionText}>Check out our latest offers and discounts available for a limited time.</p>
        <button style={styles.offersButton}>View Offers</button>
      </div>

      {/* Gallery Section */}
      <div style={styles.gallerySection}>
        <h2 style={styles.sectionTitle}>Gallery</h2>
        <p style={styles.sectionText}>Explore photos of our ambiance, dishes, and happy customers.</p>
        <button style={styles.galleryButton}>View Gallery</button>
      </div>

      {/* Contact Us Section */}
      <div style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.sectionText}>Have any questions or need to make a reservation? Get in touch with us!</p>
        <button style={styles.contactButton}>Contact Us</button>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: '#5D4037', 
      backgroundColor: '#F5F5DC', 
    },
    heading: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '4rem',
      color: '#8B4513',
      marginBottom: '10px',
    },
    paragraph: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: '1.5rem',
      color: '#fff',
      marginBottom: '20px',
      fontStyle: 'italic',
    },
    banner: {
      position: 'relative',
      width: '100%',
      height: '600px',
      overflow: 'hidden',
    },
    bannerImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'brightness(60%)',
    },
    bannerText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#8B4513',
      textAlign: 'center',
    },
    exploreButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#8B4513',
      color: '#F5F5DC',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    servicesSection: {
      padding: '50px 20px',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: '36px',
      color: '#8B4513',
      marginBottom: '30px',
    },
    sectionText: {
      color: '#5D4037',
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
      boxShadow: '0px 4px 6px rgba(93, 64, 55, 0.5)',
      borderRadius: '10px',
      overflow: 'hidden',
      backgroundColor: '#D2B48C',
      cursor: 'pointer', // Added cursor pointer to make it clear the card is clickable
    },
    serviceImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    serviceTitle: {
      color: '#8B4513',
    },
    serviceText: {
      color: '#5D4037',
    },
    offersSection: {
      padding: '50px 20px',
      textAlign: 'center',
      backgroundColor: '#F5F5DC',
    },
    offersButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#8B4513',
      color: '#F5F5DC',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    gallerySection: {
      padding: '50px 20px',
      textAlign: 'center',
      backgroundColor: '#F5F5DC',
    },
    galleryButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#8B4513',
      color: '#F5F5DC',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    contactSection: {
      padding: '50px 20px',
      textAlign: 'center',
      backgroundColor: '#D2B48C',
      color: '#5D4037',
    },
    contactButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#8B4513',
      color: '#F5F5DC',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
};

export default Home;
