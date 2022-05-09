const navegacion = document.querySelector('.navegacion');

// Seleccionar el primer o último elemento
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
console.log(navegacion.children); // No considera los espacios en blanco

console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';

card.children[0].src = 'img/hacer3.jpg';

console.log(card.children[0]);

// Traversing de hijo al padre
console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement); // La mejor forma

// Seleccionar el hermano
console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);