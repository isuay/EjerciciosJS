// Switch case

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        pagar();
        console.log(`Has pagado con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Has pagado con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Has pagado con ${metodoPago}`);
        break;
    default:
        console.log('Aún no has seleccionado un método de pago o método de pago no soportado');
        break;
}


function pagar() {
    console.log('Pagando...');
}