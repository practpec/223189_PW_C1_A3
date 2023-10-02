import React from 'react';

const Aside = () => {
  return (
    <aside>
      <div className="container">
        <div className="elemento-contenedor">
          <div className="elemento-con-degradado">
            <h4 id="elemento">Animal of the Day</h4>
          </div>
        </div>
        <div className="imagen-con-texto2">
          <img src="https://a-z-animals.com/media/2022/10/Asian-Longhorn-Beetle-400x300.jpg" alt="Imagen" />
          <div className="texto2">
            <a>A Huskydoodle Animals that Start with H</a>
            Example: The Huskydoodle
          </div>
        </div>
        <div
          className="imagenaside"
          style={{
            backgroundImage:
              "url('https://a-z-animals.com/media/az-banner-bg.jpg')"
          }}
        ></div>
        <div className="elemento-contenedor">
          <div className="elemento-con-degradado">
            <a>
              <h5>The 8 Best Pet Products on Amazon This September</h5>
            </a>
          </div>
        </div>
        <div className="imagenaside">
          <img
            src="https://a-z-animals.com/media/2022/06/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-picture-id1296353202-300x180.jpg"
            height="100%"
            width="100%"
            alt="AZ Animals Logo"
          />
        </div>
        <div className="elemento-contenedor">
          <div className="elemento-con-degradado">
            <a>
              <h5>Discover Why Maine Is Called the Pine Tree State</h5>
            </a>
          </div>
        </div>
        <div className="imagenaside">
          <img
            src="https://a-z-animals.com/media/2023/07/shutterstock-650868691-huge-licensed-scaled-300x200.jpg"
            height="100%"
            width="100%"
            alt="AZ Animals Logo"
          />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
