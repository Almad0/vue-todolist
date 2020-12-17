// Funzionalitá:
//
// - L'utente puó inserire nuove tasks
// - Cliccando sulla "X" L'utente puó cancellare una task
// - Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// - Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
// - Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.



let root = new Vue({

  el: "#root",

  data: {
    audio: true,
    isData: false,
    newTask: "",
    list: []

  },

  // created(){
  //   setTimeout(this.play, 1000);
  // },
  
  methods: {

    addTask: function(){
      if (this.newTask.length > 3) {
        this.list.push(this.newTask);
        this.newTask = ""
        this.isData = true;
      }
    },

    // play: function() {
    //     this.audio.play();
    // },

    removeTask: function (index) {
      let x = this.list.splice(index, 1);
      if (this.list.length == 0) {
        this.isData = false;
      }
    }
  }

});

























// fine
