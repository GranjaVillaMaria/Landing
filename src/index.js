import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/home/home';
import About from './components/about/about';
import PhotoGallery from './components/gallery/photoGallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <About />
    <PhotoGallery />
  </React.StrictMode>
);

reportWebVitals();
