const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// .every devuelve true o false si las condiciones se cumplen en todos los elementos
const resultado = carrito.every(producto => producto.precio < 500);
console.log(resultado);

// Mientras que con .some al menos uno debe cumplir la condición
const resultado2 = carrito.some(producto => producto.precio < 500);
console.log(resultado2);