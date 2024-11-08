const user = new Vuex.Store({
    state: {
        colabs: [
            {
                id: 1,
                nombre: 'Nicolas Rodriguez',
                imagen: 'img/user2.jpg',
                aka: '@RadFix',
                link: 'html/radfix.html'
            },
            {
                id: 2,
                nombre: 'Manuel Ardila',
                imagen: 'img/user1.jpg',
                aka: '@Manupenes',
                link: 'html/.html'
            },
            {
                id: 3,
                nombre: 'Yefer Contreras',
                imagen: 'img/user3.jpg',
                aka: '@Manupenes',
                link: 'html/.html'
            }
        ]
    },
    getters: {
        colabs: state => state.colabs
    }
});

new Vue({
    el: '#app',
    store: user,
    computed: {
        colabs() {
            return this.$store.getters.colabs;
        }
    }
});
