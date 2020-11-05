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
  console.log(arrayRandom);

  // inserisco i numeri in un alert
  var numGame = alert("Memorizza questi 5 numeri e clicca OK" + " " + arrayRandom);

  // passano 30 secondi (prova 3 secondi)

  var tempo = setTimeout(inserisciNum,3000);


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

        // altrimenti se diverso a num random dell'arrayrandom: hai perso + quanti + quali numeri ha indovinato
      }else if(!arrayRandom.includes(numUtente)){
        console.log("Hai perso! " + "Hai indovinato un totale di " + arrayUtente.length + " numero/i," + "i numeri che hai indovinato sono: " + arrayUtente);
        return;
        // altrimenti se numero inserito è uguale a num random dell'arrayrandom nuova richiesta prompt + pushalo nell' arrayutente
      }else{
        arrayUtente.push(numUtente);
      }
      i++;
    } //fine ciclo while

    // se tutti i numeri uguali: hai vinto
    if(arrayUtente.length === 5){
      console.log("hai vinto! HAI INDOVINATO TUTTI I NUMERI");
    }

  }//fine funzione


});
