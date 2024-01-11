/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var n1=0;
var n2=0;
counter1 =0;
counter2 =0;
while (n1<5) {
  var risultatodado1 = Math.floor(Math.random() * 6) + 1;
  console.log('player uno lancia i dadi, il risultato del dado è' + risultatodado1);
  counter1 += risultatodado1;
  n1++;
}
console.log('player 1 ha totalizzato ' + counter1);
while (n2<5) {
  var risultatodado2 = Math.floor(Math.random() * 6) + 1;
  console.log('player uno lancia i dadi, il risultato del dado è' + risultatodado2);
  counter2 += risultatodado2;
  n2++;
}
console.log('player 2 ha totalizzato ' + counter2);

if (counter1>counter2) {
  console.log('il vincitore è player 1');
} else if (counter2>counter1) {
  console.log('il vincitore è player 2');
}