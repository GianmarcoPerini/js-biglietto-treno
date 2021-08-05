let kmPercorsi = parseInt(prompt("Quanti Kilometri devi percorrere?"));
let età = parseInt(prompt("Quanti anni hai?"));
let newest;
let prezzoBiglietto = kmPercorsi * 0.21;

const scontoMinorenni = prezzoBiglietto * 20 / 100;
const scontoOver = prezzoBiglietto * 40 / 100;

if (età <= 21) {
    newest = prezzoBiglietto - scontoMinorenni;
} else if (età >= 65) {
    newest = prezzoBiglietto - scontoOver;
}

document.getElementById("km-percorsi").innerHTML = kmPercorsi;
document.getElementById("anni").innerHTML = età;
document.getElementById("prezzo-biglietto").innerHTML = Number(newest).toFixed(2);