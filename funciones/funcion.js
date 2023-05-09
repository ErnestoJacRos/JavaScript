
function miFuncion(a, b){
    return (a + b);
}

//hoisting: las funciones y variables se mueven al principio de su scope asi que no importa donde la declares puedes usar antes o despues de du propia declaracion
let resultado = miFuncion(10,10);
console.log(resultado);


