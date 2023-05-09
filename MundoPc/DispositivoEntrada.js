"use strict"
class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}




class Raton extends DispositivoEntrada{
    static cotadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.cotadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [IdRaton: ${this._idRaton}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
    }
}


class Teclado  extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;        
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [IdTeclado ${this._idTeclado}, TipoEntrada:  ${this._tipoEntrada}, Marca: ${this._marca}]`
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamanho){
        this._marca = marca;
        this._tamanho = tamanho;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamanho(){
        return this._tamanho;
    }
    set tamanho(tamanho){
        this._tamanho = tamanho;
    }
    toString(){
        return `Monitor: [ IdMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamanho}]`
    }


}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;

       
    }
    toString(){
        return `\n Computadora: [IdComputadora: ${this._idComputadora}, Nombre: ${this._nombre}, \n Monitor: ${this._monitor}, \n Teclado: ${this._teclado}, \n Raton: ${this._raton}]`
    }
}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden (){
        return this._idOrden;
    }
    agregarComputadoras(computadora){
        this._computadoras.push(computadora)

    }

    mostrarOrden(){
        let computadorasOrden = '';
        for (const computadora of this._computadoras) {
            computadorasOrden += `\n ${computadora}`;
            }
            console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    } 

}


let raton1 = new Raton('USB', 'Hp');
console.log(raton1.toString());
let raton2 = new Raton('Usb', 'Dell');
raton2.marca = 'Hp'
console.log(raton2.toString());

let teclado1 = new Teclado('Bluetooth', 'MSI');
console.log(teclado1.toString());
let teclado2 = new Teclado('Usb','Acer');
console.log(teclado2.toString());

let monitor1 = new Monitor('Hp','15');
let monitor2 = new Monitor('Dell', '27')
console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new Computadora('Dell',monitor1,teclado1,raton1);
console.log(computadora1.toString());

let computadora2 = new Computadora('Armada',monitor2,teclado2,raton2);
console.log(`${computadora2
}`)

let orden1 = new Orden();
orden1.agregarComputadoras(computadora1);
orden1.agregarComputadoras(computadora2);
orden1.agregarComputadoras(computadora1);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadoras(computadora1);
orden2.agregarComputadoras(computadora2);
orden2.mostrarOrden();