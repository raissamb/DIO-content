/*
Desafio
Neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 
Entrada

Você receberá um número onde: 
Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
Se o número for apenas múltiplo de 3 -> "Fizz" ; 
Se o número for apenas múltiplo de 5 -> "Buzz"; 
Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 
*/

let resultado = 4;

function fizzBuzz(resultado) {
    if (resultado % 3 === 0 && resultado % 5 === 0) {
        console.log("FizzBuzz");
    } else if (resultado % 3 === 0) {
        console.log("Fizz")
    } else if (resultado % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(resultado)
    }
}

fizzBuzz(resultado);