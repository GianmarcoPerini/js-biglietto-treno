let kmPercorsi = parseInt(prompt("Quanti Kilometri devi percorrere?"));
let età = parseInt(prompt("Quanti anni hai?"));
let sconti;
let prezzoBiglietto = kmPercorsi * 0.21;

const scontoMinorenni = prezzoBiglietto * 20 / 100;
const scontoOver = prezzoBiglietto * 40 / 100;

if (età <= 21) {
    sconti = prezzoBiglietto - scontoMinorenni
    document.getElementById("prezzo-ridotto").innerHTML = Number(sconti).toFixed(2)
    document.getElementById("sconto-20").innerHTML = "SCONTO 20%";
} else if (età >= 65) {
    sconti = prezzoBiglietto - scontoOver
    document.getElementById("prezzo-ridotto").innerHTML = Number(sconti).toFixed(2)
    document.getElementById("sconto-40").innerHTML = "SCONTO 40%";
} else {
    prezzoBiglietto
    document.getElementById("prezzo-intero").innerHTML = Number(prezzoBiglietto).toFixed(2);

}

document.getElementById("km-percorsi").innerHTML = kmPercorsi;
document.getElementById("anni").innerHTML = età;