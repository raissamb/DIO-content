/*
const nota1 = 5;
const nota2 = 3;
const nota3 = 7;
let media;

media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
    console.log("epassou")
} else if (media >= 5) {
    console.log("recu")
} else {
    console.log("rep")
}

*/

/*
const heighInMeters = 1.5;
const weightInKg = 57;
let imc;

imc = weightInKg / (heighInMeters ** 2);

if (imc >= 40) {
    console.log("Muito Obeso")
} else if ((imc < 40) && (imc >= 30)) {
    console.log("Obeso")
} else if ((imc < 30) && (imc >= 25)) {
    console.log("acima do peso")
} else if ((imc < 25) && (imc >= 18.5)) {
    console.log("Peso normal")
} else {
    console.log("abaixo do peso")
}
*/

let priceToPay;
const basePrice = 100;
let totalValueToPay;
let paymentType;

paymentType = 1

// 1 - Debt
// 2 - Dinheiro ou Pix
// 3 - Duas vezes
// 4 - Acima de duas vezes

if (paymentType === 1) {
    totalValueToPay = basePrice - (basePrice * 0.1);
} else if (paymentType === 2) {
    totalValueToPay = basePrice - (basePrice * 0.15);
} else if (paymentType === 3) {
    totalValueToPay = basePrice;
} else {
    totalValueToPay = basePrice + (basePrice * 0.1);
}

console.log(totalValueToPay)

nome = "Oi"

console.log(nome)