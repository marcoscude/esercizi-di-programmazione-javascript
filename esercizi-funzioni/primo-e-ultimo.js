/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/

//1. argomenti definiti in console.log, variabili non globali //

function maggiore(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

function minore(num1, num2, num3) {
  return Math.min(num1, num2, num3);
}

console.log('the major number is' + maggiore(3, 6, 8));
console.log('the minor number is' + minore(3, 6, 8));

//2. con dichiarazione delle variabili //
var num1=3;
var num2=5;
var num3=6;

function maggiore (num1,num2,num3) {
  return Math.max (num1,num2,num3) /*math.max definisce il maggiore*/
}
function minore (num1,num2,num3) {
  return Math.min (num1,num2,num3) /*math.min definisce il minore*/
}

console.log('the major number is' + maggiore(num1,num2,num3));
console.log('the minor number is' + minore(num1,num2,num3));