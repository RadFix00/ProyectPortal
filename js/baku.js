   //Menú hamburguesa 
    const burger = document.getElementById('burgerBtn');
    const navLinks = document.getElementById('navLinks');
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
   // Cerrar menú al hacer click en un link
    navLinks.querySelectorAll('.Head-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });