// const autenticado = true;

// if (autenticado) {
//     console.log('Si puedes entrar');
// } else {
//     console.log('No puedes entrar');
// }


// // Operador ternario

// console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');


let resultado = Math.floor(Math.random() * 10);

switch (resultado) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Suspendido");
        break;
    case 5:
    case 6:
        console.log("Bien");
        break;
    case 7:
    case 8:
        console.log("Notable");
        break;
    case 9:
    case 10:
        console.log("Sobresaliente");
        break;
    default:
        console.log("Error");
}

console.log(resultado);