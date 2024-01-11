/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/


var currentdate = new Date();
var currentyear = currentdate.getFullYear();
var bornyear = 1994;
var yearsold = currentyear-bornyear;
var until100 = 100-yearsold;

console.log('we are currently in year ' + currentyear + ', Marco is born in ' + bornyear + ' and is ' + yearsold + ' years old.');
console.log('In ' + until100 + ' years, Marco will be 100 years old.')