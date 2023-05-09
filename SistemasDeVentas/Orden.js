class Orden{
    static contadorOrdenes;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
    }
}