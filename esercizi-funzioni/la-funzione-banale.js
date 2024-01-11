/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE

    
  http://www.imparareaprogrammare.it
*/

function /*sintassi*/sonoUguali/*nome funzione*/(arg1,arg2)/*argomenti*/ {
  return/*sintassi, cosa restituirà la funzione*/ arg1===arg2/*confronto tra argomenti*/;
}

console.log(sonoUguali/*chiamata della funzione*/(2,3)/*valore da attribuire ai due argomenti*/);
