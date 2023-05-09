//usamos this en el constructor para los atrubitos de la clase 
class Persona {
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;

    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}
let persona1 = new Persona('Ernesto','Jacros');
console.log(persona1);
console.log(persona1.nombre)

let persona2 = new Persona('Sara','Garcia');
console.log(persona2);