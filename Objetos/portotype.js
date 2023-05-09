//usamos prototype para agregar a los objetos del construcotes 
//sin modificar directamente ese constructor 

//Funcion constructor de onjetos de tipo persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
let padre = new Persona('Ernesto','Jacros','correo@dominio.com');
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Sarah', 'Garcia', 'correoMadre@dominio.com');


Persona.prototype.tel = '4545';
console.log(padre.tel);
console.log(padre);