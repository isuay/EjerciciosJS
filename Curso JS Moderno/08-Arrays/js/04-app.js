const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

meses[0] = 'Nuevo Mes';
meses[10] = 'Ultimo mes';

console.table(meses);

for (let i = -20; i < 100; i++) {
    console.log(meses[i]);
}