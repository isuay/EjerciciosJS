const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

// Cuando le pasar un parametro solamente no hacen falta parentesis
// pero si le pasar varios si
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

aprendiendo('JS', 'Node.js');
console.log(aprendiendo2('JS'));
console.log(aprendiendo3('JS', 'Node.js'));