//funcones que se llamana asi mismas
//también es una función anónima 
//no se puede resutilizar ya qu eno la hemos puesto en una variable y le hemos puesto un nombre
(function(a, b){
    console.log("Ejecutando Función " + (a + b))
})(1,8);