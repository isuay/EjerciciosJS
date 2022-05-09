const autenticado = true;

if (autenticado) {
    console.log('El usuario esta autenticado');
}

const puntuacion = 450;

function revisarPuntuacion() {
    if (puntuacion > 400) {
        console.log('Excelente!!');
        return;
    }

    if (puntuacion > 300) {
        console.log('Buena puntuación... enhorabuena');
        return;
    }
}

revisarPuntuacion();