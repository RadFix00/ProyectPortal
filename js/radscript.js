function openScreen() {
    document.getElementById('preview-container').style.display = 'block';
    document.getElementById('fondo').style.display = 'block';
}

function closeScreen() {
    document.getElementById('preview-container').style.display = 'none';
    document.getElementById('fondo').style.display = 'none';
}

const user = new Vuex.Store({
  state: {
    colabs: [
      {
        id: 1,
        nombre: 'Atelier Clothe Shop',
        imagen: '/img/atelier.jpg',
        link: 'https://radfix00.github.io/Atelier-Shop/',
        aka: 'Tienda De Ropa',
        skills: 'Css - Html - VueJs - JavaScript',
      },
      {
        id: 2,
        nombre: 'Galactic-Vortex',
        imagen: '/img/galactic-vortex.png',
        link: 'https://radfix00.github.io/Galactic-Vortex/',
        aka: 'Juego Web Js',
        skills: 'Html - Css - Boostrap - JavaScript',
      },
      {
        id: 3,
        nombre: 'TuGrua.com',
        imagen: '/img/galactic-vortex.png',
        link: 'https://radfix00.github.io/TuGrua/',
        aka: 'Aplicacion Web Geolocation',
        skills: 'Html - Css - Boostrap - JavaScript',
      },
      
    ],
  },
  getters: {
    colabs(state) {
      return state.colabs;
    }
  }
});

new Vue({
  el: '#project',
  store: user, // Asegúrate de que 'user' sea el nombre de tu store en Vuex
  data() {
    return {
      iframeSrc: '',
      iframeWidth: '100%',
      iframeHeight: '600px',
    };
  },
  computed: {
    colabs() {
      return this.$store.getters.colabs;
    },
  },
   methods: {
    // Método que maneja ambas acciones
    handleClick(link, device) {
      openScreen(); 

      this.setProject(link, device);
    },
    
    setProject(link, device) {
      this.iframeSrc = link;
      switch (device) {
        case 'pc':
          this.iframeWidth = '100%';
          this.iframeHeight = '100%';
          break;
        case 'tablet':
          this.iframeWidth = '76%';
          this.iframeHeight = '100%';
          break;
        case 'mobile':
          this.iframeWidth = '37%';
          this.iframeHeight = '100%';
          break;
      }
     },
     
  },
});