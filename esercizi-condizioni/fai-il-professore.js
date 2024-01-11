/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

var voto = 27;

// metodo if-else //
if (voto<18) {
  console.log('il voto conseguito è di' + voto + ' ed è insufficiente');
} else if (voto>=18 && voto <21) {
  console.log('il voto conseguito è di' + voto + ' ed è sufficiente');
} else if (voto>=21 && voto <24) {
  console.log('il voto conseguito è di' + voto + ' ed è buono');
} else if (voto>=24 && voto <27) {
  console.log('il voto conseguito è di' + voto + ' ed è distinto');
} else if (voto>=27 && voto <30) {
  console.log('il voto conseguito è di' + voto + ' ed è ottimo');
} else if (voto>=30) {
  console.log('il voto conseguito è di' + voto + ' ed è eccellente');
}

// metodo switch -case //
var messaggio = '';

if (voto < 0 || voto > 30) {
  messaggio = 'Voto non valido';
} else {
  switch (true) {
    case voto < 18:
      messaggio = 'Insufficiente';
      break;
    case voto < 21:
      messaggio = 'Sufficiente';
      break;
    case voto < 24:
      messaggio = 'Buono';
      break;
    case voto < 27:
      messaggio = 'Distinto';
      break;
    case voto <= 29:
      messaggio = 'Ottimo';
      break;
    case voto === 30:
      messaggio = 'Eccellente';
      break;
  }
}