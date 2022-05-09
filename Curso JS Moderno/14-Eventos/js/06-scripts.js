// Event Bubbling - cuando hay clases dentro de otra y le das eventos a todas
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en info');
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en titulo');
});

// .stopPropagation() - detener la prpagacion y que no se ejecuten los eventos de las clases padres