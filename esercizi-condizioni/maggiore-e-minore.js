/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/


var a = 3;
var b = -1;
var c = 4;
var d = -2;

// Opzione 1, utilizzando le condizioni //
// Trovo il maggiore //
if (a>b && a>c & a>d) {
  console.log ('il valore maggiore è' + a)
} else if (b>a && b>c & b>d) {
  console.log ('il valore maggiore è' + b)
} else if (c>a && c>b & c>d) {
  console.log ('il valore maggiore è' + c)
} else if (d>a && d>c & d>b) {
  console.log ('il valore maggiore è' + d)
}
// Trovo il minore //
if (a<b && a<c & a<d) {
  console.log ('il valore minore è' + a)
} else if (b<a && b<c & b<d) {
  console.log ('il valore minore è' + b)
} else if (c<a && c<b & c<d) {
  console.log ('il valore minore è' + c)
} else if (d<a && d<c & d<b) {
  console.log ('il valore minore è' + d)
}

// Opzione 2, utilizzando la funzione Math.max //

var maggiore = Math.max(a, b, c, d); // trovo il maj con math.max
var minore = Math.min(a, b, c, d); // trovo il min con math.min

console.log('Il valore maggiore è ' + maggiore);
console.log('Il valore minore è ' + minore);