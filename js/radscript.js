function toggleSection(section) {
    const sections = ['study', 'projects', 'contact'];
    sections.forEach(sec => {
        const element = document.getElementById(sec);
        if (element) {
            element.style.display = sec === section ? 'block' : 'none';
        }
    });
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
                skills: 'Css - Html - VueJs - JavaScript'
            } ,
            {
                id: 2,
                nombre: 'Galactic-Vortex',
                imagen: '/img/galactic-vortex.png',
                link: 'https://radfix00.github.io/Galactic-Vortex/',
                aka: 'Juego Web Js',
                skills: 'Html - Css - Boostrap - JavaScript'
            },
            {
                id: 2,
                nombre: 'TuGrua.com',
                imagen: '/img/galactic-vortex.png',
                link: 'https://radfix00.github.io/TuGrua/',
                aka: 'Aplicacion Web Geolocation',
                skills: 'Html - Css - Boostrap - JavaScript'
            }
        ]
    },
    getters: {
        colabs: state => state.colabs
    }
});

new Vue({
    el: '#project',
    store: user,
    computed: {
        colabs() {
            return this.$store.getters.colabs;
        }
    }
});

