console.log("Palidroma");

//1. Genero un prompt dove chiedo all'utente di inserire una parola;
const parolaUtente = prompt("inserire una parola");
console.log(parolaUtente);

//2. 3. Inserisco la parola in un array;

const arrayUtente = parolaUtente.split("");
console.log(arrayUtente);

//4. Trovo un modo se possibile di invertire l'ordine dell'array;
arrayUtente.reverse();
console.log(arrayUtente);

//4.1 Unisco l'array di lettere invertite insieme in una stringa usando join();

const parolaInvertita = arrayUtente.join("");
console.log(parolaInvertita);

//5. Confronto la stringa invertita con la parola inserita;

if (parolaUtente === parolaInvertita){
  console.log("la parola è palindroma");
}else{
  console.warn("inserire un'altra parola");
}
