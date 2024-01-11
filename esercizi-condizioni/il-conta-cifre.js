/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/


var num = 4;
// con metodo if else//
if (num<11) {
  console.log('1 cifra');
} else if (num>10 && num<101) {
  console.log('2 cifre');
} else if (num>100 && num<1001) {
  console.log('3 cifre');
} else {
  console.log('4 cifre');
}
// convertendo il numero in stringhe e poi usando il metodo .length//
var lunghezza = num.toString().length;
console.log(lunghezza + ' cifre');