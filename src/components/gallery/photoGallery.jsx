// src/components/PhotoGallery.js
import React, { useState } from 'react';
import './photoGallery.css';
import imagen1 from '../../images/finca1.jpg'
import imagen2 from '../../images/finca2.jpg'
import imagen3 from '../../images/finca3.jpg'
import imagen4 from '../../images/finca4.jpg'
import imagen5 from '../../images/finca5.jpg'
import imagen6 from '../../images/finca6.jpg'


const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
  ];

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery">
      {photos.length > 0 ? (
        photos.map((photo, index) => (
          <div className="photo-item" key={index} onClick={() => handlePhotoClick(photo)}>
            <img src={photo} alt={`Photo ${index + 1}`} />
          </div>
        ))
      ) : (
        <p>No photos available</p>
      )}
      
      {selectedPhoto && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={selectedPhoto} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;