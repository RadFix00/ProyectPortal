
function PlaySound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.play();
}

function StopSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}

const user = new Vuex.Store({
    state: {
        colabs: [
            {
                id: 1,
                nombre: 'Nicolas Rodriguez',
                imagen: 'img/1.jpg',
                aka: '@RadFix',
                link: 'html/radfix.html'
            },
            {
                id: 2,
                nombre: 'Manuel Ardila',
                imagen: 'img/user1.jpg',
                aka: '@Bakugod777',
                link: 'html/bakugod.html'
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
