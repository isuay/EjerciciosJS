const puntuacion = 1000;
const puntuacion2 = "1000";

console.log(typeof puntuacion);
console.log(typeof puntuacion2);

// if (puntuacion != 1000) { // != diferente   == igual a
//     console.log('Si es diferente...');
// }

if (puntuacion !== "1000") {
    console.log('Si es diferente...');
} else {
    console.log('No es diferente...');
}

// == / != Operador que no es estricto
// === / !== Operador Estricto