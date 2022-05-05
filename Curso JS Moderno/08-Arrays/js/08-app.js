const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true
}

// Destructuring con objetos
const { nombre } = producto;
console.log(nombre);


// Destructuring con arrays
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, ...tercero] = numeros;

console.log(primero);
console.log(segundo);
console.log(tercero);