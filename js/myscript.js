// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.



// genero 5 numeri random e li salvo
var arrayRandom = [];

for (var i = 0; i < 5; i++) {
  var numRandom = Math.floor(Math.random() *50) + 1;
  console.log(numRandom);
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

// passano 30 secondi

// l'utente inserisce in 5 prompt i numeri

// se numeri diversi da alert: hai perso + quanti + quali numeri ha indovinato

// se numeri uguali a alert : hai vinto
