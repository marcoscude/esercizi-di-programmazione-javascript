/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

    
  http://www.imparareaprogrammare.it
*/

function counter(number) {
  if (number < 0 || number > 9999) {
    console.log('Il numero deve essere compreso tra 0 e 9999.');
    return;
  } // L'if restituisce l'eventuale errore

  const numString = number.toString(); //il metodo tostring transforma il numero in stringhe
  const numDigits = numString.length; // il metodo lenght restituisce la quantità di numeri

  console.log('Il numero' + number + 'è composto da' + numDigits + ' cifre.');
}

counter(972);