/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

var play1 = 52;
var play2 = 78;
var casualnumber = Math.floor(Math.random() * (100-1) + 1); // la funziona math.floor arrotonda, math.random genera un numero da 0 a 1
var distanza1 = Math.abs(casualnumber - play1); // math.abs restituisce un valore assoluto
var distanza2 = Math.abs(casualnumber - play2);

// dichiarazioni //
console.log('il giocatore 1 ha giocato il numero' + play1);
console.log('il giocatore 2 ha giocato il numero' + play2);
console.log('il numero casuale generato è' + casualnumber);

//condizioni//
if (casualnumber===play1) {
  console.log('il giocatore 1 ha indovinato il numero');
} else if (casualnumber===play2) {
  console.log('il giocatore 2 ha indovinato il numero');
} else if (distanza1<distanza2) {
  console.log('nessuno dei due giocatori ha indovinato, ma il giocatore 1 si è avvicinato di più')
} else if (distanza1>distanza2) {
  console.log('nessuno dei due giocatori ha indovinato, ma il giocatore 2 si è avvicinato di più')
}