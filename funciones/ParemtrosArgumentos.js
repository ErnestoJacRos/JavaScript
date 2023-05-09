//Parametros son los valores que vamos a requerir cuando  declaramos la función 
//Argumentos son los valores que pasamos cuando llamos a la función 

//declaración de una función de tipo expresíon 
let suma = function(a,b){
    //arguments[0] es para ver que argumento es 
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
}
let resultado = suma(8,1);
console.log(resultado);