/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/

var n = 17;
counter = 0; /*inizializzazione*/

//metodo do while//
do {
  console.log (n*counter) /*codice da eseguire*/
  counter ++; /*iterazione*/
} while (counter <=10); /*condizione*/

//metodo for//
for (var counter = 1; /*inizializzazione*/ counter <= 10;/*condizione*/ counter++/*iterazione*/) {
  console.log(n * counter); /*codice da eseguire*/
}