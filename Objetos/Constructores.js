//Función constructor de objetos de tipo Persona
// nombre se define con mayúsculas 
//las paremtros va a ser los atributos del objeto
// se define con la palabra function
//usamos constructores para crear nuevos objetos apartir de él
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Ernesto', 'Jacros','correo@dominio.com');
console.log(padre);
console.log(padre.nombreCompleto());

let hijo = new Persona('Luis Ernesto', 'Jacros','correohijo@dominio.com');
console.log(hijo);

padre.nombre = 'Leandro'
console.log(padre);
console.log(hijo);
console.log(hijo.nombreCompleto());