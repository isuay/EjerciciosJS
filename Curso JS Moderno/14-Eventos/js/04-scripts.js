// Eventos en un formulario

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    
    console.log('Consultar una api');

    console.log(e.target.action);
}

// submit - cuando alguien presiona el button que tiene el type submit
// .preventDefault() te permite que no se abra lo que esta en 'action' y no envíe los datos vía método 'post' o método 'get'
// sino que tú puedas realizar las acciones como validar un formulario o enviar los datos hacia un endpoint de alguna api