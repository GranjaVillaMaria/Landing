import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/home/home';
import About from './components/about/about';
import PhotoGallery from './components/gallery/photoGallery';
import Servicios from './components/servicios/servicios';
import UnderConstruction from './components/underconstruction/underconstruction';
import Comodidades from './components/comodidades/comodidides';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <About />
    <PhotoGallery />
    <Servicios />
    <Comodidades />
    <UnderConstruction />
  </React.StrictMode>
);

reportWebVitals();
