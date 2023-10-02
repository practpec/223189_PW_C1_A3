
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect } from "react";

const Header = () => {
    useEffect(() => {
      const btnMenu = document.querySelector("#btnMenu");
      const menu = document.querySelector("#menu");
  
      btnMenu.addEventListener("click", function () {
        menu.classList.toggle("mostrar");
      });

      return () => {
        btnMenu.removeEventListener("click", function () {
          menu.classList.toggle("mostrar");
        });
      };
    }, []);
    useEffect(() => {
      const botonCambioTema = document.getElementById("cambiar-tema");
      const body = document.body;
      const iconoModo = document.getElementById("icono");
  
      botonCambioTema.addEventListener("click", () => {
        body.classList.toggle("modo-oscuro");
        const modoOscuroActivado = body.classList.contains("modo-oscuro");
        if (modoOscuroActivado) {
          iconoModo.className = "fa-regular fa-moon";
        } else {
          iconoModo.className = "fa-regular fa-sun";
        }
      });
    }, []); 

  return (
    <header>
      <button id="cambiar-tema">
        <i id="icono" className="fa-regular fa-sun"></i>
      </button>
      <div className="estetico">
        <div className="header-logo">
          <a>
            <img
              src="https://a-z-animals.com/wp-content/themes/aza-next/assets/images/logo/logo.png"
              alt="AZ Animals Logo"
              height="70"
              width="100"
            />
          </a>
        </div>
        <span className="nav-bar" id="btnMenu">
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
      <nav className="main-nav">
        <ul className="menu" id="menu">
          <li className="menu-item">
            <a className="menu-link"  href="/">All Animals</a>
          </li>
          <li className="menu-item container-submenu">
            <a className="menu-link submenu-btn">
              Animals List <i className="fa-solid fa-sort-down"></i>
            </a>
            <ul className="submenu">
              <li className="menu-item">
                <a href="/Paginados" className="menu-link">
                  By Starting Letter
                </a>
              </li>
              <li className="menu-item">
                <a href="/user/1.js" className="menu-link">
                  By Scientific Name
                </a>
              </li>
              <li className="menu-item"><a href="" class="menu-link">By Class</a></li>
                    <li className="menu-item"><a href="" class="menu-link">By Location</a></li>
                    <li className="menu-item"><a href="" className="menu-link">Endangered</a></li>
                    <li className="menu-item"><a href="" className="menu-link">Mammals</a></li>
                    <li className="menu-item"><a href="" className="menu-link">Reptiles</a></li>
                    <li className="menu-item"><a href="" className="menu-link">Fish</a></li>
                    <li className="menu-item"><a href="" className="menu-link">Birds</a></li>
                    <li className="menu-item"><a href="" className="menu-link">Amphibians</a></li>
                    <li className="menu-item"><a href="" className="menu-link">Reference</a></li>
            </ul>
          </li>
          <li className="menu-item container-submenu">
            <a className="menu-link submenu-btn" href="#">
              Pets <i className="fa-solid fa-sort-down"></i>
            </a>
            <ul className="submenu">
              <li className="menu-item">
                <a href="" className="menu-link">
                  All Pets
                </a>
              </li>
              <li className="menu-item">
                <a href="" className="menu-link">
                  Cat Breeds
                </a>
              </li>
              <li class="menu-item"><a href="" class="menu-link">Dog Breeds</a></li>
                    <li class="menu-item"><a href="" class="menu-link">Pet Birds</a></li>
                    <li class="menu-item"><a href="" class="menu-link">Pet Rodents</a></li>
                    <li class="menu-item"><a href="" class="menu-link">Exotic Pets</a></li>
                    <li class="menu-item"><a href="" class="menu-link">Pet Fish</a></li>
            </ul>
          </li>
          <li class="menu-item container-submenu"><a class="menu-link submenu-btn" href="#">Places <i class="fa-solid fa-sort-down"></i></a>
                    <ul class="submenu">
                        <li class="menu-item"><a href="" class="menu-link">All Places</a></li>
                        <li class="menu-item"><a href="" class="menu-link">Aquariums</a></li>
                        <li class="menu-item"><a href="" class="menu-link">Islands</a></li>
                        <li class="menu-item"><a href="" class="menu-link">Lakes</a></li>
                        <li class="menu-item"><a href="" class="menu-link">Mountains</a></li>
                        <li class="menu-item"><a href="" class="menu-link">Parks</a></li>
                        <li class="menu-item"><a href="" class="menu-link">Rivers</a></li>
                        <li class="menu-item"><a href="" class="menu-link">Waterfalls</a></li>
                    </ul></li>
          <li className="menu-item">
            <a className="menu-link" href="#">
              Reviews
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">
              Articles
            </a>
          </li>
          <li className="menu-item container-submenu">
            <a className="menu-link submenu-btn" href="#">
              Quizzes <i className="fa-solid fa-sort-down"></i>
            </a>
            <ul className="submenu">
              <li className="menu-item">
                <a href="" className="menu-link">
                  All Quizzes
                </a>
              </li>
              <li className="menu-item">
                <a href="" className="menu-link">
                  Snake Quiz
                </a>
              </li>
              <li class="menu-item"><a href="" class="menu-link">Dog Quiz</a></li>
                        <li class="menu-item"><a href="" class="menu-link">Cat Quiz</a></li>
                        <li class="menu-item"><a href="" class="menu-link">Flags of the World</a></li>
                        <li class="menu-item"><a href="" class="menu-link">State Flags</a></li>
            </ul>
          </li>
          <li className="menu-item">
            <div className="header-busqueda dentro-menu">
              <form action="#" method="GET">
                <input type="text" name="busqueda" placeholder="Buscar..." />
                <button type="submit">Buscar</button>
              </form>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

