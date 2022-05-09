// Eventos que suceden con el scroll del mouse

window.addEventListener('scroll', () => {
    
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);
    if (ubicacion.top < 700) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aun no, da más scroll');
    }
});