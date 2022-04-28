const producto = 'Monitor 20 pulgadas';

// .repeat te va a permitir repetir una cadena de texto
const texto = ' en Promocion'.repeat(3);
console.log(texto);
console.log(`${producto}${texto}!!!`);

// .split te permite dividir un string
const actividad = "Estoy aprendiendo JS Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JS #JSModernoConJuan";
console.log(tweet.split('#'));