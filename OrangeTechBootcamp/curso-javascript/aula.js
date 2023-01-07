
/*
const gasFuelPrice = 6.66;
const alcoholFuelPrice = 5.79;
const carFuelRangeKmPerLiter = 10;
const distanceKm = 100;
let fuelType;
let totalCost;

fuelType = "gas"

if (fuelType === "gas") {
    totalCost = gasFuelPrice * (distanceKm / carFuelRangeKmPerLiter);
} else {
    totalCost = alcoholFuelPrice * (distanceKm / carFuelRangeKmPerLiter);
}

console.log(totalCost.toFixed(2));
*/

/*
// Tabuada
const number = 5;

for (let index = 1; index <= 10; index++) {
    console.log(number + " x " + index + " = " + (number * index));

}

*/

// Percorre lista imprimi par

//const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
let numbers = []

for (let index = 0; index <= 10; index++) {
    numbers[index] = index;

}


for (let index = 0; index < numbers.length; index++) {
    if (index % 2 === 0) {
        console.log(index + " is Even");
    }

}

*/

const numerosPares = [];



for (let i = 0; i < 10; i++) {

    const numeroPar = i % 2 === 0;

    if (numeroPar) {

        numerosPares.push(i);

    }

}



