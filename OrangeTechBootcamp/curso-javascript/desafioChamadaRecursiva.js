/*
Descrição
Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   
*/

let n = 4;

function somatorio(n) {
    let soma = 0;
    for (let i = n; i > 0; --i) {
        soma = soma + i;
    }
    return (console.log(soma));
}
//console.log(soma)

somatorio(n);