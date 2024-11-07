const user = new Vuex.Store({
    state: {
        colabs: [
            { id: 0, nombre: 'Manuel Penes', imagen: '/img/user1.jpg' },
            { id: 1, nombre: 'Nicolas Rodriguez', imagen: '/img/user2.jpg' }
        ]
    },
    getters: {
        colabs: state => state.colabs
    }
});

new Vue({
    el: '#app',
    store: user, // Cambiar aquí 'store' por 'user'
    computed: {
        // Acceso a los colaboradores desde el store usando getters
        colabs() {
            return this.$store.getters.colabs; // Aún accedes a través de this.$store
        }
    }
});
