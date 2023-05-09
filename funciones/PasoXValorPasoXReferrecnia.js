//Tipo primitivo
//paso por Valor
let x = 10;
function cambiarValor(a){
    a = 20;
}
//paso por valor 
console.log(cambiarValor(x));
console.log(x);// no cambia porques uso una copia 
//console.log(a);//es undefine porque solo es variable del método

//Creación de un objeto

const persona = {
    nombre: 'Ernesto',
    apellido: 'Pérez'
}

function cambiarValorObjeto(p1){
    p1.nombre  = 'Sarah ';
    p1.apellido = 'Garcia';
}
 //Paso por referencia
    
 cambiarValorObjeto(persona);
 console.log(persona);

