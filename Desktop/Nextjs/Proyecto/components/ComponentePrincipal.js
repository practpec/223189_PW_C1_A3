import React, { useEffect }from 'react';
import Video from './Videos';
import ComponenteSecundario from './Componentesecundario';

const ComponentePrincipal = () => {
    useEffect(() => { //carrusel de imagenes//
        const urlsImagenes = [
            'https://a-z-animals.com/media/az-banner-bg.jpg',
            'https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg?cs=srgb&dl=pexels-anthony-%F0%9F%93%B7%F0%9F%93%B9%F0%9F%99%82-133459.jpg&fm=jpg',
            'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg',
            'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fHww&w=1000&q=80'
            
        ];
        const elementoImagen = document.getElementById('slider-image');
        let indiceActual = 0;
        function cambiarImagen() {
            elementoImagen.src = urlsImagenes[indiceActual];
            indiceActual = (indiceActual + 1) % urlsImagenes.length;
        }
        setInterval(cambiarImagen, 5000);
        
        //alerta//
        document.getElementById("botonAlerta").addEventListener("click", function() {
            alert("Esta página no está disponible");
        });
        }, []);
  return (
    <main>
      <div className="image-container">
        <img id="slider-image" src="https://a-z-animals.com/media/az-banner-bg.jpg" alt="Imagen" />
        <div className="image-text">
          <h1>Animals!</h1>
          <p>
            Discover the strongest, smartest, and fastest animals in the world by searching below, or scroll to see all animals listed from A-Z. We are the largest website of our kind for wild animal and pet lovers worldwide!
          </p>
          <button id="botonAlerta" className="botonbuscar">See them all!</button>
        </div>
      </div>

      <div className="">
        <p className="texto">We believe that if people know more about the world’s creatures they will better care for them. That’s why we add new animals for you to discover – each and every day! Learn about any animal using the search box below or <a className="linkverde" href="">subscribe to our YouTube Channel</a>. Also be sure to check out our growing list of <a href="" className="linkverde"> Animal Quizzes</a> and <a href="" className="linkverde"> Web Stories.</a></p>
        
        <div className="elemento-contenedor">
          <div className="elemento-con-degradado">
            <h2>Discover Your Favorite Animal Today!</h2>
          </div>
        </div>

        <p>Find your favorite Animals!</p>

        <div className="header-busqueda2">
          <form action="#" method="GET">
            <input type="text" name="busqueda" placeholder="Buscar..." />
            <button type="submit">Buscar</button>
          </form>
        </div>

       <Video/>

        <div className="elemento-contenedor">
          <div className="elemento-con-degradado">
            <h2>Latest from A-Z Animals</h2>
          </div>
        </div>

        <div class="otraspaginas">
        <img src="https://a-z-animals.com/media/animals/images/original/iStock-1132413864-300x200.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">See a Big Black Bear Interrupt a Group of Hikers in the Smokey Mountains</a></h2>
            <p class="text">
                There’s not one, but two black bears in this wonderful clip that you can check out here. In it, we join a group of hikers walking through some woods in… <a class="text" href="otra_pagina.html">Read More</a></p>
            
            <p class="text"> By <a href="otra_pagina.html"> Sharon Parry</a> 20 mins ago</p>
        </div>
    </div>
    <div class="otraspaginas">
        <img src="https://a-z-animals.com/media/2023/09/GettyImages-1640312609-300x200.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Baby Owl: 8 Adorable Pictures and 10 Amazing Facts</a></h2>
            <p class="text">
                How cute are baby owls? These little balls of fluff hardly resemble the fierce predators they will one day become. But one day they will look just like their parents… <a class="text" href="otra_pagina.html">Read More</a></p>
            
            <p class="text"> By <a href="otra_pagina.html"> Tavia Fuller Armstrong 

            </a> 1 hour ago</p>
        </div>
    </div>
    
    <div class="otraspaginas">
        <img src="https://a-z-animals.com/media/2023/07/shutterstock-126730232-huge-licensed-scaled-300x200.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Rainy Season In Seattle: Peak Timing and Why It Rains So Much</a></h2>
            <p class="text">
                The city of Seattle in Washington state often finds itself under a thick blanket of clouds, either shrouded in drizzle or in pouring rain. This is a familiar image to… <a class="text" href="otra_pagina.html">Read More</a></p>
            
            <p class="text"> By <a href="otra_pagina.html"> Shreya Agrawal </a> 2 hour ago</p>
        </div>
    </div>

    <div class="otraspaginas">
        <img src="https://a-z-animals.com/media/2022/09/iStock-1375137262-300x200.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Rainy Season In Seattle: Peak Timing and Why It Rains So Much</a></h2>
            <p class="text">
                The city of Seattle in Washington state often finds itself under a thick blanket of clouds, either shrouded in drizzle or in pouring rain. This is a familiar image to… <a class="text" href="otra_pagina.html">Read More</a></p>
            
            <p class="text"> By <a href="otra_pagina.html"> Shreya Agrawal </a> 2 hour ago</p>
        </div>
    </div>

    <div class="otraspaginas">
        <img src="https://a-z-animals.com/media/2022/08/Black-Racer-Snake-in-Tennessee-300x214.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Rainy Season In Seattle: Peak Timing and Why It Rains So Much</a></h2>
            <p class="text">
                The city of Seattle in Washington state often finds itself under a thick blanket of clouds, either shrouded in drizzle or in pouring rain. This is a familiar image to… <a class="text" href="otra_pagina.html">Read More</a></p>
            
            <p class="text"> By <a href="otra_pagina.html"> Shreya Agrawal </a> 2 hour ago</p>
        </div>
    </div>

    <div class="otraspaginas">
        <img src="https://a-z-animals.com/media/2023/01/Kemps-ridley-300x202.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Rainy Season In Seattle: Peak Timing and Why It Rains So Much</a></h2>
            <p class="text">
                The city of Seattle in Washington state often finds itself under a thick blanket of clouds, either shrouded in drizzle or in pouring rain. This is a familiar image to… <a class="text" href="otra_pagina.html">Read More</a></p>
            
            <p class="text"> By <a href="otra_pagina.html"> Shreya Agrawal </a> 2 hour ago</p>
        </div>
    </div>

    <div class="otraspaginas">
        <img src="https://a-z-animals.com/media/2022/10/shutterstock_1323675554-300x200.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Rainy Season In Seattle: Peak Timing and Why It Rains So Much</a></h2>
            <p class="text">
                The city of Seattle in Washington state often finds itself under a thick blanket of clouds, either shrouded in drizzle or in pouring rain. This is a familiar image to… <a class="text" href="otra_pagina.html">Read More</a></p>
            
            <p class="text"> By <a href="otra_pagina.html"> Shreya Agrawal </a> 2 hour ago</p>
        </div>
    </div>


    <div class="otraspaginas">
        <img src="https://a-z-animals.com/media/2023/08/shutterstock-1310489780-huge-licensed-scaled-300x200.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Rainy Season In Seattle: Peak Timing and Why It Rains So Much</a></h2>
            <p class="text">
                The city of Seattle in Washington state often finds itself under a thick blanket of clouds, either shrouded in drizzle or in pouring rain. This is a familiar image to… <a class="text" href="otra_pagina.html">Read More</a></p>
            
            <p class="text"> By <a href="otra_pagina.html"> Shreya Agrawal </a> 2 hour ago</p>
        </div>
    </div>
    

    <div class="otraspaginas">
        <img src="https://a-z-animals.com/media/2022/12/shutterstock_751043794-300x200.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Rainy Season In Seattle: Peak Timing and Why It Rains So Much</a></h2>
            <p class="text">
                The city of Seattle in Washington state often finds itself under a thick blanket of clouds, either shrouded in drizzle or in pouring rain. This is a familiar image to… <a class="text" href="otra_pagina.html">Read More</a></p>
            
            <p class="text"> By <a href="otra_pagina.html"> Shreya Agrawal </a> 2 hour ago</p>
        </div>
    </div>

    <div class="elemento-contenedor"><div class="elemento-con-degradado"><h2>The 7 Main Types of Animals And Their Characteristics</h2></div>
    <p>There are many different types of animals in the world, but some of the largest categories include:</p>
    </div> 

    <div class="otraspaginas2">
        <img src="https://a-z-animals.com/media/2021/01/Wild-Chameleon-Reptile-With-Beautiful-Colors-400x300.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Reptiles</a></h2>
            <p class="text">
                <a hreft="otra_pagina.html">Lizards</a>, dinosaurs, crocodiles, turtles, and snakes – all belong to that ancient and stout class of animals known as the reptiles. This is a diverse group with more than 10,000 different species and a huge representation in the fossil record. Once the dominant land vertebrates on the planet, reptiles still occupy just about every single ecosystem outside of the extreme north and south..</p>
            
            <p class="text"> Se complete <a href="otra_pagina.html"> list of birds </a>.</p>
        </div>
    </div>

    <div class="otraspaginas2">
        <img src="https://a-z-animals.com/media/2021/01/Betta-fish-siamese-fighting-fish-400x300.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Fish</a></h2>
            <p class="text">
                Birds, members of the class Aves, include more than 10,400 living species. Their feathers distinguish them from all other classes of animal; no other animals on earth have them. If you see an animal with feathers, it’s undoubtedly a bird. Like mammals, birds are warm-blooded vertebrates with four-chambered hearts. However, they are more closely related to reptiles and are believed to have evolved from dinosaurs.</p>
            
            <p class="text"> Se complete <a href="otra_pagina.html"> list of birds </a>.</p>
        </div>
    </div>

    <div class="otraspaginas2">
        <img src="https://a-z-animals.com/media/2021/01/spring-colored-birds-flirting-400x300.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Birds</a></h2>
            <p class="text">
                Birds, members of the class Aves, include more than 10,400 living species. Their feathers distinguish them from all other classes of animal; no other animals on earth have them. If you see an animal with feathers, it’s undoubtedly a bird. Like mammals, birds are warm-blooded vertebrates with four-chambered hearts. However, they are more closely related to reptiles and are believed to have evolved from dinosaurs.</p>
            
            <p class="text"> Se complete <a href="otra_pagina.html"> list of birds </a>.</p>
        </div>
    </div>

    <div class="otraspaginas2">
        <img src="https://a-z-animals.com/media/2021/01/Golden-eyed-leaf-frog-400x300.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Amphibians</a></h2>
            <p class="text">
                Birds, members of the class Aves, include more than 10,400 living species. Their feathers distinguish them from all other classes of animal; no other animals on earth have them. If you see an animal with feathers, it’s undoubtedly a bird. Like mammals, birds are warm-blooded vertebrates with four-chambered hearts. However, they are more closely related to reptiles and are believed to have evolved from dinosaurs.</p>
            
            <p class="text"> Se complete <a href="otra_pagina.html"> list of birds </a>.</p>
        </div>
    </div>

    <div class="otraspaginas2">
        <img src="https://a-z-animals.com/media/2021/01/Jellyfish-with-neon-glow-light-effect-in-sea-aquarium-in-Sentosa-Singapore-400x300.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Invertebrates</a></h2>
            <p class="text">
                Birds, members of the class Aves, include more than 10,400 living species. Their feathers distinguish them from all other classes of animal; no other animals on earth have them. If you see an animal with feathers, it’s undoubtedly a bird. Like mammals, birds are warm-blooded vertebrates with four-chambered hearts. However, they are more closely related to reptiles and are believed to have evolved from dinosaurs.</p>
            
            <p class="text"> Se complete <a href="otra_pagina.html"> list of birds </a>.</p>
        </div>
    </div>

    <div class="otraspaginas2">
        <img src="https://a-z-animals.com/media/2021/01/Queen-butterfly-danaus-gilippus-on-blue-hydrangea-flowers-400x300.jpg" alt="Imagen" class="imagenes"/>
        <div>
            <h2 class="title"><a href="tu_pagina_destino.html">Insects</a></h2>
            <p class="text">
                Birds, members of the class Aves, include more than 10,400 living species. Their feathers distinguish them from all other classes of animal; no other animals on earth have them. If you see an animal with feathers, it’s undoubtedly a bird. Like mammals, birds are warm-blooded vertebrates with four-chambered hearts. However, they are more closely related to reptiles and are believed to have evolved from dinosaurs.</p>
            
            <p class="text"> Se complete <a href="otra_pagina.html"> list of birds </a>.</p>
        </div>
    </div>



      </div>
      <ComponenteSecundario/>
      
    </main>
  );
}

export default ComponentePrincipal;
