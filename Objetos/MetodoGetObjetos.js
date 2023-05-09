//normalmnete si queremos que se ejecute una función ponemos el nombre de la función mas parénbtisis function()
//pero acceder a esa función podemos usar el método Get anteponiendola al nombre la función de donde está definida 
let persona = {
    nombre: 'Ernesto',
    apellido: 'Jacros',
    email: 'correo@dominio.com',
    telefono: 548565,
    idioma: 'es',
    get language(){
        return this.idioma.toUpperCase();
    },
    set language(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }  
}

console.log(persona.nombreCompleto)
console.log(persona.language);
persona.language = 'mex';
console.log(persona.idioma);


