/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

function contaTempo(secondi) {
  // Calcola le ore, i minuti e i secondi
  var ore = Math.floor(secondi / 3600);
  var minuti = Math.floor((secondi % 3600) / 60);
  var restantiSecondi = secondi % 60;

  // Costruisci la stringa di output
  var risultato = "";
  if (ore > 0) {
    risultato += ore + " ore, ";
  }
  if (minuti > 0) {
    risultato += minuti + " minuti, ";
  }
  risultato += restantiSecondi + " secondi.";

  // Stampi il risultato
  console.log("Input: " + secondi);
  console.log("Output: " + risultato);
}

// Esempio di utilizzo con l'input 12560
contaTempo(12560);