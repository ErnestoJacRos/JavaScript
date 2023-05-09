'use strict'

let resultado = -5
try{
    //x = 34;
    if(isNaN(resultado)) throw 'no es un numero';
    else if (resultado === '') throw ' es una cadena vacia'
    else if(resultado >= 0) throw 'es valor positivo'
    else if(resultado < 0 ) throw 'es un valor negativo'
}catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}

