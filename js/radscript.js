function toggleSection(section) {
    const sections = ['study', 'projects', 'contact'];
    sections.forEach(sec => {
        const element = document.getElementById(sec);
        if (element) {
            element.style.display = sec === section ? 'block' : 'none';
        }
    });
}

function openAbout() {
    document.getElementById('study').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
}

const user = new Vuex.Store({
    state: {
        colabs: [
            {
                nombre: 'Nicolas Rodriguez',
                imagen: 'img/user2.jpg',
                link: 'html/radfix.html'
            },
            {
                nombre: 'Nicolas Rodriguez',
                imagen: 'img/user2.jpg',
                link: 'html/radfix.html'
            }
        ]
    },
    getters: {
        colabs: state => state.colabs
    }
});

new Vue({
    el: '#projects',
    store: user,
    computed: {
        colabs() {
            return this.$store.getters.colabs;
        }
    }
});

