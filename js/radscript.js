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
                aka: 'Tienda De Ropa'
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

