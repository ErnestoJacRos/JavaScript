//el hoisting no 
class Persona{
    static contadorDeObjetosPersona = 0;
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorDeObjetosPersona++;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //sobre escribiendo el método d ela clase padre (object)
    toString(){
        //se aplica polimorfismo(multiples formas en tiempo d eejecución), el método que se ejecuta depende si e suna referencia de un tipo padre o d eun tipo hijo 
        return this.nombreCompleto();
    }
    //método estaticos
    static saludar(){
        //método solo es de la clase 
        console.log("Saludos dede método static ");
    }
    static saludarDos(persona){
            return persona.nombre;   
         }

}



class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido)
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //sobreescritura del método nombre completo
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}
  
    let persona1 = new Persona('Ernesto', 'Jacros');
    console.log(persona1.toString());

    let empleado1 = new Empleado('Sarah','Garcia','Sistemas');
    console.log(empleado1);

    console.log(empleado1.nombre);
    console.log(empleado1.nombreCompleto());
    console.log(empleado1.toString())
  
//los métodos estaticos no se pueden llamar desde un objeto de la clase 
//entonces parallamarlo debemos pone rla clase , ya que los métodos estaticos
//son parte de la clase y no del objeto
Persona.saludar()
console.log(Persona.saludarDos(persona1))