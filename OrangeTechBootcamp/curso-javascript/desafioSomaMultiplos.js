/*
Desafio

Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.
*/

const a = 5;
const N = 20;

let sum = 0;

for (let i = 0; i <= N; i++) {
    if (i % a === 0) {
        sum = sum + i;
    }
}

console.log(sum)