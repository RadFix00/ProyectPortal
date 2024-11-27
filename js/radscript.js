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
    colabs: (state) => state.colabs,
  },
});

new Vue({
  el: '#project',
  store: user,
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
    setProject(link, device) {
      this.iframeSrc = link;
      switch (device) {
        case 'pc':
          this.iframeWidth = '100%';
          this.iframeHeight = '600px';
          break;
        case 'tablet':
          this.iframeWidth = '768px';
          this.iframeHeight = '1024px';
          break;
        case 'mobile':
          this.iframeWidth = '375px';
          this.iframeHeight = '667px';
          break;
      }
    },
  },
});