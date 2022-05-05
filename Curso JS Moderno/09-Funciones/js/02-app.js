// Declarar una funcion
// De esta forma podemos utilizar la funcion antes de crearla
sumar();
function sumar() {
    console.log(2 + 2);
}

// De esta forma no podemos utilizar la funcion antes de crearla
sumar2();
// Expresion de funcion
const sumar2 = function() {
    console.log(3+3);
}
