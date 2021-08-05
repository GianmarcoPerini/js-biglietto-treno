let kmPercorsi = parseInt(prompt("Quanti Kilometri devi percorrere?"));
let età = parseInt(prompt("Quanti anni hai?"));
let sconti;
let prezzoBiglietto = kmPercorsi * 0.21;

const scontoMinorenni = prezzoBiglietto * 20 / 100;
const scontoOver = prezzoBiglietto * 40 / 100;

if (età <= 21) {
    sconti = prezzoBiglietto - scontoMinorenni;
} else if (età >= 65) {
    sconti = prezzoBiglietto - scontoOver;
}

document.getElementById("km-percorsi").innerHTML = kmPercorsi;
document.getElementById("anni").innerHTML = età;
document.getElementById("prezzo-biglietto").innerHTML = Number(sconti).toFixed(2);