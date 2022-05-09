// Eventos con el teclado

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) => {
    if (e.target.value === '') {
        console.log('Falló la validación');
    }
})

// keydown - cuando presionas una tecla
// keyup - cuando sueltas una tecla
// blur - cuando me salgo fuera del input
// copy - cuando le das a copiar(ctl+c) el texto
// paste - cuando le das a pegar(ctl+v) el texto
// cut - cuando le das a cortar(ctl+x) el texto
// input - cuando estas escribiendo, sueltas, pegas... todos menos el blur