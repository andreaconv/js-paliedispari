
const pari = "pari";
const dispari = "dispari";
let winner;

// INPUT 
// 1. 
const sceltaUtente = prompt("scegliere e inserire pari o dispari");

// capisco se l'utente ha scelto pari o dispari
if (sceltaUtente === pari){
  console.log("l'utente ha scelto pari");
}else if(sceltaUtente === dispari){
  console.log("l'utente ha scelto dispari");
}else {
  console.warn("l'utente ha scritto male");
}

// 2.
const numeroUtente = parseInt(prompt("inserire un numero da 1 a 5"));
console.log("numeroUtente", numeroUtente);

// 3. genero un numero random per il computer utilizzando una funzione;
const numeroComputer = generoNumeroRandom(1, 5)
console.log("numeroComputer", numeroComputer);

// 4. sommo i due numeri dei giocatori
const somma = numeroUtente + numeroComputer;
console.log("somma", somma);

// 5. Tramite una funzione capisco se il numero uscito dalla somma è pari o dispari;
const esitoSomma = pariOdis (somma);
console.log("esitoSomma", esitoSomma);

// 6. In base alla scelta dell'utente stabilisco il vincitore.
if (esitoSomma === sceltaUtente){
  winner = `Il vincitore è l'utente`
}else {
  winner = `Il vincitore è il computer`
}
console.log(winner);


// FUNZIONE che mi genera un numero random 
function generoNumeroRandom (min, max) {
  const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
  return numeroRandom;
}

//FUNZIONE che mi restituisce pari o dispari
function pariOdis (numA) {
  const message = (!(numA % 2)) ? "pari" : "dispari";
  return message;
}