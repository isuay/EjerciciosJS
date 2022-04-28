const num1 = 20;
const num2 = "20";
const num3 = 30;

// Comparar si son iguales
console.log(num1 == num3);
console.log(num1 == num2);

// Comparador estricto
console.log(num1 == num2); // Devuelve true
console.log(num1 === num2); // Devuelve false
console.log(num1 === parseInt(num2)); // Devuelve true

// Compara si son diferentes
const passwd1 = "admin";
const passwd2 = "Admin";

console.log(passwd1 != passwd2); // Devuelve true
console.log(num1 != num2); // Devuelve false
console.log(num1 !== num2); // Devuelve true
console.log(num1 !== parseInt(num2)); // Devuelve false