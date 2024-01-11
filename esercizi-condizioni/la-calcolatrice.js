/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/


var a = 10;
var b = 2;
var string = 'potenza';

// Opzione 1 if-else //
if (string === 'somma') {
  console.log(a+b);
} else if (string === 'sottrazione') {
  console.log(a-b);
} else if (string === 'moltiplicazione') {
  console.log(a*b);
} else if (string === 'divisione') {
  console.log(a/b);
} else if (string === 'modulo') {
  console.log(a%b);
} else if (string === 'potenza') {
  console.log(a**b);
} else if (string === 'media') {
  console.log((a+b)/2);
} 

// Opzione 2 - switch / case

switch (string) {
  case 'somma':
    console.log(a + b);
    break;
  case 'sottrazione':
    console.log(a - b);
    break;
  case 'moltiplicazione':
    console.log(a * b);
    break;
  case 'divisione':
    console.log(a / b);
    break;
  case 'modulo':
    console.log(a % b);
    break;
  case 'potenza':
    console.log(a ** b);
    break;
  case 'media':
    console.log((a + b) / 2);
    break;
  default:
    console.log('Operazione non supportata');
}