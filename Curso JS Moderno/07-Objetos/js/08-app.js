"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true
}

// No se pueden modificar las variables del objeto ni se pueden agregar ni eliminar
Object.freeze( producto );

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto));