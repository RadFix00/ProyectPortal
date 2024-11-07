const user = new Vuex.Store({
    state: {
        colabs: [
            { id: 1, nombre: 'Nicolas Rodriguez', imagen: '/img/user2.jpg', aka: '@RadFix' },
            { id: 2, nombre: 'Manuel Ardila', imagen: '/img/user1.jpg', aka: '@Manumenes'}
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
