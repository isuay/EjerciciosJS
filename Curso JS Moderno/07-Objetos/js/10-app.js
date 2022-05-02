const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

// Juntar los dos objetos en una variable
const resultado = Object.assign(producto, medidas);
const resultado2 = { ...producto, ...medidas }; // Spread Operator o Rest Operator
console.log(resultado);
console.log(resultado2);