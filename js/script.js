function createSquare(){
  const section = document.querySelector('section');
  const square = document.createElement('span');
  var size = Math.random() * -5;
  
  square.style.width = 8 + size + 'px';
  square.style.height = 8 + size + 'px';
  
    square.style.top = Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';
  
    section.appendChild(square);

}
setInterval(createSquare, 800)


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
                imagen: 'img/user2.jpg',
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
