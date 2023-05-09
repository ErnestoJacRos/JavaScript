let persona = {
    nombre: 'Ernesto',
    apellido: 'Jacros',
    nombreCompleto:function(titulo, tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: ' Sara',
    apellido: 'Garcia'
}

//Uso de applay para usar el método
//persona.nombreCompleto() con los datos de persona2 sin que este definido en él
console.log(persona.nombreCompleto('Lic','454545'));
//a diferencia entre [call] y [applay] es que podemos pasar los parametros pero en un array
let arreglo = ['Ing.','787878']
console.log(persona.nombreCompleto.apply(persona2,arreglo));