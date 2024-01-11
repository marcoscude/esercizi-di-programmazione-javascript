/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/

function fattoriale (number) {

var counter = 1; /*creo una variabile
per disporre di un contatore*/

do { 
  counter *= number /*moltiplico il contatore
  per il numbero*/
  number--; /*diminuisco di 1 il valore
  del numero*/
} while (number>1); /*ripeto il ciclo
fin quando il numero non vale 1*/

return counter;
}

console.log(fattoriale(9));