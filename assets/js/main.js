// Funzionalitá:
//
// - L'utente puó inserire nuove tasks Cliccando sulla "X"
// - L'utente puó cancellare una task Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// - Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
// - Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.



let root = new Vue({

  el: "#root",

  data: {

    newTask: "",
    list: []

  },

  created(){

  },

  methods: {

    submitTask: function(){
      this.list.push(this.newTask);
      this.newTask = ""
    }

}

});

























// fine
