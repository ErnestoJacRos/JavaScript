//los objetos puede tener propiedades y métodos

let persona = {

    nombre: 'Ernesto',
    apellido: 'Jacros',
    email: 'ejacros@gmail.com',
    edad: 78,
    nomnreCompleto : function (){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nomnreCompleto());

let personaDos = new Object();
personaDos.nombre = 'Ernesto';
personaDos.direccion = 'Saturno 15';
personaDos.telefono = 45641215;4

console.log(personaDos);
//otraforma de acceder a los atributos de un onjeto

console.log(persona['nombre'])

for ( propiedad in persona) {
  console.log(persona[propiedad]);
}

//agrgar propiedades a un objeto 
persona.telefono = 5645;
console.log(persona);
//para modificar la propiedad es lo mismo 
persona.telefono = 465454685;
console.log(persona);

//para Borrar una propieda de un objeto es:
delete persona.telefono;
console.log(persona)

//Formas de imprimir las un objeto 
console.log(persona.nombre + ' ' + persona.apellido)

//imprimir con forin
for(nombrePropiedad in  persona){
    console.log(persona[nombrePropiedad]);
} 
//imprimir las propiedades de unu objeto como un arreglo
let arrayPersona = Object.values(persona);
console.log(arrayPersona);

//imprimir las propiedas como cadenas de texto +
let personaSting = JSON.stringify(persona);
console.log(personaSting);  

