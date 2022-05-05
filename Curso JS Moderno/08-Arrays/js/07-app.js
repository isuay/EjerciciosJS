const carrito = [];

// Definir un producto
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto4 = {
    nombre: 'Celular 2',
    precio: 100
}

// .push agrega al final de un array
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

// Añadir en primera posicion
carrito.unshift(producto3);
console.table(carrito);


// // .pop elimina el ultimo elemento del array
// carrito.pop();
// console.table(carrito);

// // .shift elimina el primer elemento del array
// carrito.shift();
// console.table(carrito);

// Eliminar desde una posicion concreta del array
carrito.splice(1, 1);
console.table(carrito);