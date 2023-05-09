"use strict"
class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, depto: ${this._departamento}` 
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente')
        console.log(tipo._departamento);
        }
    if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado')
    }
    if(tipo instanceof Object){
        console.log('Es un objeto de tipo Object');
    }
}
let empleado1 = new Empleado('Ernesto',8988999);
let gerente1 = new Gerente('Sara',6565656,'Sistemas');

imprimir(empleado1);
imprimir(gerente1);
