class Persona{
    static contadorPersonas = 0;
    constructor(nombre , apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        
    }
    get nombre(){
        return this._nombre;
    }set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }set edad(edad){
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
    }
    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`
    }
}
/////////////////////////////////////////////////////

class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad,sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;

    }
    get idEmpleado (){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`
    }
}
///////////////////////////////////////////////////////////


class Cliente extends Persona{
    static contadorCliente = 0;
    constructor(nombre, apellido, edad,fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
         return`${super.toString()} ${this._idCliente} ${this._fechaRegistro}`
    }

}

//Iniciando Prueba .

let persona1 = new Persona('Ernesto','jacinto',33);
console.log(persona1.toString());
let persona2 = new Persona('Sara','Garcia', 29);
console.log(persona2.toString());

let empleado1 = new Empleado('Ana', 'Gomez', 33, 55000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Laura', 'Rodriguez', 78, 85000);
console.log(empleado2.toString());

let cliente1 = new Cliente('Bernardo','Canañas',58, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Fernando', 'Duran', 78, new Date());
console.log(cliente2.toString());