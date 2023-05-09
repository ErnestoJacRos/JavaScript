let edad = Number("18");


if (isNaN(edad)) {
    console.log("No es un numero");
} else {
    if (edad >= 18 ) {
        console.log("Puede votar");
    } else {
        console.log("No puede votar")
    }
}

if (isNaN (edad)) {
    console.log("No es un numero")
} else {
    let resultado = edad >= 18 ? "Puede votar":"NO puede votar"
    console.log(resultado)
}