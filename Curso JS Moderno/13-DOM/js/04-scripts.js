// .querySelector solo te va a devolver un elemento como max
// Es la forma que se usa habitualmente para seleccionar los elementos

// Seleccionar una clase
const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Selccionar la id formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elementos por la etiqueta HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);