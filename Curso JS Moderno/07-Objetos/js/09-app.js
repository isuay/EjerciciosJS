"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true
}

// Se pueden modificar las variables ya existentes del objeto, pero no se pueden agregar ni eliminar
Object.seal( producto );

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));