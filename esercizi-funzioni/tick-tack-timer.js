/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  http://www.imparareaprogrammare.it
*/

function countdown (number) {


  while (number>=0) { //ciclo che si ripete fin quando number = 0
    console.log(number); // stampo il numero
    number-- // diminuisco valore del numero
  }
  
  /* non viene inserito 'return' così facendo non restituisce un
  risultato ma esegue le funzioni al suo interno*/
}

countdown(5); /* chiamo la funzione, potrebbe essere ovunque
nel codice */