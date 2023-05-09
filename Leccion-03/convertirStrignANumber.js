let miNumero = "18";
//console.log(typeof(miNumero));
let edad = Number(miNumero);
console.log(typeof edad);

if (edad >= 18) {
    console.log("Puede votar");
} else {
    console.log("No puede votar")
}

let resultado = (edad >= 18)?"Puede votar":"No puede votar"
console.log(resultado);

let numero = 10;
let cadena = String(numero);
console.log(typeof cadena);
