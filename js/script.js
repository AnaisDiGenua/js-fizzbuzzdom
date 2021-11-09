// Consegna: 
// Scrivi un programma che stampi in console i numeri da 1 a 100.

// MILESTONE 1 Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.   Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2 Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3 Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.




// stampare i numeri da 1 a 100 e scritte
let num;
const ul = document.querySelector('.lista-numeri');


for (num = 1; num <= 100; num++) {

    if (num % 3 == 0 && num % 5 == 0) {
        ul.innerHTML += `<li class="square red">${'fizzbuzz'}</li>`;
    } else if (num % 5 == 0) {
        ul.innerHTML += `<li class="square yellow">${'buzz'}</li>`;
    } else if (num % 3 == 0) {
        ul.innerHTML += `<li class="square green">${'fizz'}</li>`;
    } else {
        ul.innerHTML += `<li class="square blue">${num}</li>`;
    }

}





