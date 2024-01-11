/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/

intero(2); //chiamata valore, do numero intero

function intero(int) { 
  if (int >= 1 && int <= 7) { /*se il valore è tra 1 e 7*/
    giorno(int); /* chiama la funzione giorno(int)*/

  } else {
    console.log('Peccato, non posso indovinare il giorno.'); /*in alternativa stampa*/
  }
}

// è meglio non annidare mai le funzioni per leggibilità ed accessibilità //

function giorno(int) { /* funzioen giorno(int)*/
switch (int) {
  case 1:
    console.log('lunedi');
    break;
  case 2:
    console.log('martedi');
    break;
  case 3:
    console.log('mercoledi');
    break;
  case 4:
    console.log('giovedi');
    break;
  case 5:
    console.log('venerdi');
    break;
  case 6:
    console.log('sabato');
    break;
  case 7:
    console.log('domenica');
    break;
  default:
    break;
}
}


