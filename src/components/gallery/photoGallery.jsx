// src/components/PhotoGallery.js
import React, { useState } from 'react';
import './photoGallery.css';
import imagen1 from '../../images/finca1.jpg'
import imagen2 from '../../images/finca2.jpg'
import imagen3 from '../../images/finca3.jpg'
import imagen4 from '../../images/finca4.jpg'
import imagen5 from '../../images/finca5.jpg'
import imagen6 from '../../images/finca6.jpg'
import imagen7 from '../../images/finca7.jpg'
import imagen8 from '../../images/finca8.jpg'
import imagen9 from '../../images/finca9.jpg'
import imagen10 from '../../images/finca10.jpg'
import imagen11 from '../../images/finca11.jpg'
import imagen12 from '../../images/finca12.jpg'
import imagen13 from '../../images/finca13.jpg'
import imagen14 from '../../images/finca14.jpg'
import imagen15 from '../../images/finca15.jpg'
import imagen16 from '../../images/finca16.jpg'
import imagen17 from '../../images/finca17.jpg'
import imagen18 from '../../images/finca18.jpg'




const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9,
    imagen10,
    imagen11,
    imagen12,
    imagen13,
    imagen14,
    imagen15,
    imagen16,
    imagen17,
    imagen18,

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