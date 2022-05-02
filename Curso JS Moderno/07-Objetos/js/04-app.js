const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true
}

// Version antigua
// const nombre = producto.nombre;

// Extraer los datos de una variable del objeto - 

// Destructuring
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);