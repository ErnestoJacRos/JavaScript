class Cliente extends Persona{
    static contadorClinete = 0;
    constructor(nombre, apellido, edad,fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++contadorClinete;
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
        `${super.toString()}
         ${this._idCliente}
         ${this._fechaRegistro}`
    }
}