const producto = 'Monitor 20 pulgadas';

console.log(producto);

// .replace para reemplazar
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// .slice para cortar
console.log(producto.slice(0, 10));
// console.log(producto.slice(8));
// console.log(producto.slice(2, 1)); // Si el primer numero es mayor no va a hacer nada

// Alternativa a slice -> .substring
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1)); // Si el primer numero es mayor te los invierte


const usuario = "Iris";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0)); // Muestra el caracter en la prosicion entre parentesis