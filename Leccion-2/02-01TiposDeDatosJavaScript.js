/**Ejemplod de tipos de datos en JavaScript */
// Tipo de datos String
let nombre= "Ernesto"
console.log(nombre)
 let numero = 1000;
 //tipo de dato numerico
 console.log(numero);
 console.log(typeof numero)

 //Tipo de dato objeto
 let objeto = {
    nombre:"Ernesto",
    apellido: "Jacinto",
    telefono: 5511699676 
 }
 console.log(objeto);
 console.log(typeof(objeto));
 
 //Booleanos
 let bandera= true;
 console.log(bandera); // true o false 
 console.log(typeof(bandera));

//Tipo de dato function

function myfuncion(){}
console.log(typeof myfuncion)   

//tipo de dato Symbol
 let simbolo = Symbol("mi simbolo");
 console.log(typeof simbolo)
 //paradarle un valor único 

 //Tipo de clase es una function 

 class Persona{
   constructor(nombre, apellido){
      this.nombre = nombre;
      this.apellido = apellido;
   }
 }

 console.log(Persona);
 console.log(typeof Persona);


 //Tipo de dato undefined
 
 let x;
 console.log(x);
 console.log(typeof x);

 //null = ausencia de valor 
//tipo dato Object 
 let y = null;
 console.log(y)
 console.log(typeof y)

 //Tipo de dato arry es objevt 

 let autos = ["BMW", "Audi", "Mercedez"];
 console.log(autos);
 console.log(typeof autos);

 //cadena vacia tipo de dato es un String
 let z = "";
 console.log(z)
 console.log(typeof z);