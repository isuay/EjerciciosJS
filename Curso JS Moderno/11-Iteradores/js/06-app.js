// forEach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`);
});

const carrito = [
    {nombre: 'Monitor 37 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

const nuevoArray = carrito.forEach(producto => {
    producto.nombre;
});

// La diferencia es que crea un array nuevo
const nuevoArray2 =  carrito.map(producto => {
    producto.nombre;
});

console.log(nuevoArray);
console.log(nuevoArray2);