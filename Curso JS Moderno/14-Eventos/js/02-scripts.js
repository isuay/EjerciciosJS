// Eventos con el ratón

const nav = document.querySelector('.navegacion');

// Registrar un evento
nav.addEventListener('click', () => {
    console.log('Click en nav');
})

nav.addEventListener('dblclick', () => {
    console.log('Entrando en la navegacion');
    nav.style.backgroundColor = 'white';
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
})

// mousedown - similar al click
// click
// cblclick - doble click
// mouseup - cuenado sueltas el mouse