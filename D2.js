/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1=10
let num2=20
if (num1>num2) {
  console.log(num1+" "+"è piu grande di "+num2)
} else {
  console.log(num2+" "+"è il più grande" )
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x=10
if (x!=5) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numbfor= 20
if (numbfor%5==1) {
  console.loig("è divisibile per 5")
} else {
  console.log("non è divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numbfor2
if (numbfor==8 || numbfor2==8){
  console.log(" uno dei due numeri forniti è uguale a 8")
} else if (numbfor+numbfor2==8 || numbfor-numbfor2==8 || numbfor2-numbfor==8){
  console.log("a loro addizione/sottrazione sia uguale a 8")
} else {
  console.log("nessuno dei valori rispetta le condizioni");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart=45
let deliveryprice=10
let totalprice=totalShoppingCart+deliveryprice
if(totalShoppingCart >50){
  console.log("hai superato il totale complessivo di 50 euro ed hai diretto alla spedizione gratuita")
} else {
console.log("Il totale compresa la spedizione ammonta a: "+totalprice)}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Oggi è il blackfriday ed hai diritto ad uno sconto del 20% sul totale, la spedizione è gratuita per un totale complessivo compreso lo sconto di 50 euro")
let discountsprice =totalShoppingCart * 0.2
let totalprice2=totalShoppingCart-discountsprice
let totalprice3=totalprice2+deliveryprice
if(totalprice2 >50){
  console.log("hai superato il totale complessivo di 50 euro ed hai diretto alla spedizione gratuita")
} else {
console.log("Il totale compresa la spedizione ammonta a: "+totalprice3)
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numbercount =[16,22,3];
numbercount.sort(function(a, b) {
  return a - b;
});

console.log(numbercount);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let value= 10;
let type=(typeof value);
if (type=="number") {
  console.log("è un numero")
} else {
  console.log("non è un numero")
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numb4=18;
if (numb4 %2 ==1){
  console.log("è pari")
} else {
 console.log("è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
 
  

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val <10) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
console.log(me.city);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.splice(2,1);
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ar =[];
ar.push(1,2,3,4,5,6,7,8,9,10);
console.log(ar);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

ar.splice(9,1);
ar.push(100);
console.log(ar);