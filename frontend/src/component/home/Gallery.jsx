// src/components/gallery.jsx
import React from 'react';

// Sample images (replace these with actual images)
const galleryImages = [

  "./assets/images/gallery_01.png",
  "./assets/images/gallery_02.png",
  "./assets/images/gallery_03.png"
];

const Gallery = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Gallery</h1>
      <p style={styles.paragraph}>Explore photos of our ambiance, dishes, and happy customers.</p>
      <div style={styles.galleryGrid}>
        {galleryImages.map((image, index) => (
          <div key={index} style={styles.galleryItem}>
            <img src={image} alt={`Gallery ${index}`} style={styles.galleryImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#7D0A0A', // Dark red color for the text
    backgroundColor: '#F3EDC8', // Soft beige background for the entire page
    padding: '50px 20px',
    textAlign: 'center',
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '4rem',
    color: '#BF3131', // Deep red color for the heading
    marginBottom: '20px',
  },
  paragraph: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '1.5rem',
    color: '#7D0A0A', // Dark red color for the paragraph
    marginBottom: '30px',
    fontStyle: 'italic',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  galleryItem: {
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(125, 10, 10, 0.5)', // Dark red shadow for the gallery items
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
};

export default Gallery;
