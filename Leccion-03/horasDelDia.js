let hora = 5, msj = '';

if(hora >= 6 && hora <= 11){
    msj = "Buenos días";
    console.log(msj);
}else if(hora >= 12 && hora <= 18){
    msj = "Buenas tardes";
    console.log(msj);
}else if(hora >= 19 && hora <= 24){
    msj = "Buenas noches";
    console.log(msj);
}else if(hora >= 0 && hora < 6){
    msj = "Durmiendo";
    console.log(msj);
}else{
    console.log("no es una hora");
}