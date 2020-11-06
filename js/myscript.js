// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(document).ready(function(){

  // genero 5 numeri random e li salvo
  var arrayRandom = [];

  for (var i = 0; i < 5; i++) {
    var numRandom = Math.floor(Math.random() *50) + 1;
    // se numRandom è uguale a un numero dell'arrayRandom allora non contarlo
    if(arrayRandom.includes(numRandom)){
      i--;
      // altrimenti aggiungilo all'array
    }else {
      arrayRandom.push(numRandom);
    }
  }

  $("#random").text(arrayRandom);

  // clicco start scompare bottone e compare arrayrandom
  $(".start").click(function(){
    $(".start").hide();
    $("#random").removeClass("hide");
    $("#istruzioni").removeClass("hide");
  });


  // creo funzione per far scomparire i numeri random dopo 5 secondi (3 secondi prova)
  setTimeout(function(){
    $("#random").addClass("hide");
    $("#istruzioni").addClass("hide");
  },3000)

  // passano 30 secondi (prova 5 secondi)
  var tempo = setTimeout(inserisciNum,5000);


  // l'utente inserisce in 5 prompt i numeri e li salvo
  var arrayUtente = [];

  function inserisciNum(){


    var i = 0;
    while (i < 5) {

      var numUtente = arrayUtente[i];
      numUtente = parseInt(prompt("INSERISCI I NUMERI CHE TI RICORDI UNO ALLA VOLTA"));

      // se numero inserito da utente è uguale a num dell arrayUtente non contarlo (ripeti richiesta) + alert
      if(arrayUtente.includes(numUtente)){
        alert("HAI GIA' INSERITO QUESTO NUMERO");
        i--;

        // altrimenti se diverso a numRandom dell'arrayRandom: hai perso + quanti + quali numeri ha indovinato
      }else if(!arrayRandom.includes(numUtente)){
        console.log("Hai perso! " + "Hai indovinato un totale di " + arrayUtente.length + " numero/i," + "i numeri che hai indovinato sono: " + arrayUtente);
        return;

        // altrimenti se numero inserito è uguale a numRandom dell'arrayRandom pushalo nell' arrayUtente
      }else{
        arrayUtente.push(numUtente);
      }
      // e ripeti ciclo
      i++;
    } //fine ciclo while

    // se l'inserimento dell'utente va a buon fine per 5 volte: hai vinto
    if(arrayUtente.length === 5){
      console.log("hai vinto! HAI INDOVINATO TUTTI I NUMERI");
    }

  }//fine funzione inserisciNum


}); //fine document ready
