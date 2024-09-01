
    //SCROLL CONTRAST NAVBAR  
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.nav');
        var contrastBar = document.querySelector('.contrast-bar');
    
        if (window.scrollY > navbar.offsetHeight) {
            contrastBar.style.display = 'block';
        } else {
            contrastBar.style.display = 'none';
        }
    });
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
    // Observador para las animaciones de la clase .biography
    let options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% del elemento debe ser visible para activar la animación
    };

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('animate'); // Agrega una clase para activar la animación
          observer.unobserve(entry.target); // Deja de observar una vez que la animación se ha activado
        }
      });
    }, options);

    // Selecciona todos los elementos que deben tener animaciones
    let elements = document.querySelectorAll('.biography, .skill, .img');
    elements.forEach(element => {
      observer.observe(element); // Observa cada elemento
    });
  });

