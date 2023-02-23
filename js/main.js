/* Devo calcolare il prezzo del biglietto del treno */




/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
-- per ticket con paolo --
mentre gli over 65 pagano il 60% del prezzo el biglietto.

-- no -- 
va applicato uno sconto del 40% per gli over 65.
*/


let numeroDikm = prompt('Inserisci il numero di chilometri');
console.log(numeroDikm);

let eta = prompt('Inserisci l\'età');
console.log(eta);

let prezzo = (0.21 * numeroDikm);
//prezzo biglietto - lo sconto del 20% 

let prezzoTotale = document.getElementById('prezzoTotale')

if (eta < 18) {
    prezzo = prezzo * 0.8

    document.getElementById('prezzoTotale').innerHTML = ` hai il diritto di sconto del 20% ${prezzo} €`;


} else if (eta > 65) {
    prezzo = prezzo * 0.6

    document.getElementById('prezzoTotale').innerHTML = ` hai il diritto di sconto del 40% ${prezzo} €`;
}

console.log(prezzo)

alert(prezzo)










