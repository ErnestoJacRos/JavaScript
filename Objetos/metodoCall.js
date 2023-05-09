const persona2 = require('persona2');
//nos permite llamar un método definido en un objeto desde otro objeto
//sin tener definido el constructor
//usando el método "call"
let persona1 = {
    nombre: 'Ernesto',
    apellido: 'Jacros',
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + ' ' + this.apellido + ' ' + tel ;
    }
}

let persona2 ={
    nombre:'Sara',
    apellido:'Garcia'
}
//uso de de call para usar el método persona1.nombreCompleto(), pero, 
//con los datos de persona.2

console.log(persona1.nombreCompleto());
//con datos de persona"
console.log(persona1.nombreCompleto.call(persona2,'ing',651251));

//pasando argumentos al método usando call

