function suma (a, b){
    console.log(arguments.length);
    return(a + b);
}

let resul = suma(1,2);
console.log(resul);

console.log(typeof suma)
let miFuncion = suma.toString();
console.log(miFuncion);

