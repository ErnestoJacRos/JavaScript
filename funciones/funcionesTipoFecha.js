//declaracion funcion tipo expresion
let suma = function(a, b){return (a +b)};

let resultado = suma(4,3);
console.log(resultado);

//declaracion funcion tipo fleta 
//ya no se usa la keyword "function" ni la keyword return; y se asigna la referencia a la constante 
const sumarFuncionTipoFlecha = (a,b) => (a + b);

console.log(sumarFuncionTipoFlecha(1,2));
