import React from 'react';

const ImagenPrincipal = () => {
  return (
    <div className="image-container">
      <img
        id="slider-image"
        src="https://a-z-animals.com/media/az-banner-bg.jpg"
        alt="Imagen"
      />
      <div className="image-text">
        <h1>Animals!</h1>
        <p>
          Discover the strongest, smartest, and fastest animals in the world by
          searching below, or scroll to see all animals listed from A-Z. We are
          the largest website of our kind for wild animal and pet lovers
          worldwide!
        </p>
        <button id="botonAlerta" className="botonbuscar">
          See them all!
        </button>
      </div>
    </div>
  );
};

export default ImagenPrincipal;
