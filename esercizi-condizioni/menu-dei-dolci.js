/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/

console.log('i dolci dispnibili sono: tiramisu, torta della nonna, cheescake alla nutella, macedonia')

var dolce = 'macedonia'

if (dolce==='tiramisu') {
    console.log('hai scelto il dolce tiramisù');
}  else if (dolce==='torta della nonna') {
  console.log('hai scelto il dolce torta della nonna');
}  else if (dolce==='cheescake alla nutella') {
  console.log('hai scelto il dolce cheescake alla nutella');
}  else if (dolce==='macedonia') {
  console.log('hai scelto il dolce macedonia');
}  else {
  console.log('dolce non dispnibile');
}