'use strict'
//sintaxis clásica
function miFuncionClasica (){
    console.log('hola desde mi función clásica')
}

//con las funciones flecha no se aplica hoistingn 
//ya que al usa let no aplica el hoistingn 
//lo más común es que declaremos con const las funciones
let miFuncion = function (){
    console.log('saludos desde mi función ');
}


const miFuncioFlecha = () => {
    console.log('saludos desde mi función fechecja')
}

miFuncion();
miFuncioFlecha();
miFuncionClasica();

//con funciones fecha si solo es una linea no usamos llaves
const funcionHola = () => console.log('Funcion fecha con una sola linea')

funcionHola();

//funcion fecha con un retur

const funcioconRetorno = () => {
    return 'saludos desde funcion fecha con retorno'
}

console.log(funcioconRetorno())


//funcion con fecha con retorno pero solo es una solo linea
const funcionConRetornosoloUnLinea = () => 'Saludos desdesss funcion con retorno de una solo linea' 

console.log(funcionConRetornosoloUnLinea());

//usando una funcion con un objetp usamos parenstesis para nop confuncir con el cuerpo de la función

const funcionConObjeto = () => ({nombre: 'Ernesto', apellido: 'Garcia'})
console.log(funcionConObjeto());

//funcion fecha con argumentos
const funcioConParametros = (mensaje) => console.log(mensaje);
funcioConParametros('funcion con paramtros');

//funcion de fecha con un solo argumento podemos quitar los parentesis

const funcionParemetros = mensaje => console.log(mensaje)

funcionParemetros('funcion fecha sin parentesis')

const funcionConVariosParemetros = (n1, n2) => n1 + n2;

console.log(funcionConVariosParemetros(4,4));

