// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:

// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”;

// Dopo esserci concentrati sul far funzionare le cose e averle testate,
// ragioniamo  sul possibile refactoring, quindi ottimizzazione possibile,
// sia del codice come performance, ma anche, se non soprattutto come leggibilità e mantenibilità. :genio_uomo:

let multTre, multCinque, messaggio;


// stampiamo i valori da 1 a 100 
for (let i = 1; i <= 100; i++) {
    multTre = i % 3 === 0;
    multCinque = i % 5 === 0;
    messaggio = "il valore di i è: ";
    
    // if (multTre) {
        // SE il numero è un multiplo di 3 e 5 stampo "FizzBuzz"
    //     if(multCinque) console.log(messaggio + "FizzBuzz"); 
        
        //SE il numero è un multiplo di 3 stampo "Fizz"
    //     else console.log(messaggio + "Fizz"); 

    // } 
       // SE il numero è un multiplo di 5 stampo "Buzz"
    // else if (multCinque) {
    //     console.log(messaggio + "Buzz");

    // } 
       // ALTRIMENTI stampo i numeri normalmente
    // else {
    //     console.log(messaggio, i);
    // }

    
    // SE il numero è un multiplo di 3 stampo "Fizz"
    if (multTre) {
        // allora stampo "Fizz"
        messaggio += "Fizz";
    } 
    
    // SE il numero è un multiplo di 3 e 5 stampo "FizzBuzz"
    // SE il numero è un multiplo di 5 stampo "Buzz"
    if (multCinque) {
        // allora stampo "Buzz"
        messaggio += "Buzz"

    // ALTRIMENTI SE il numero non è un multiplo di 3 e 5 stampo stampo i numeri normalmente
    } else if (!multTre) {
        // stampo numero normale
        messaggio += i;
    }
    
    // output numero in cosole
    console.log(messaggio);

    // if (multTre && multCinque) {
    //     messaggio += "FizzBuzz";
    // } else if (multTre) {
    //     messaggio += "Fizz";
    // } else if (multCinque) {
    //     messaggio += "Buzz";
    // } else {
    //     messaggio += i
    // }

    // console.log(messaggio);
}