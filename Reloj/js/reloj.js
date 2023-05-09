const mostrarReloj = ()=>{
    let fecha =  new Date;
    let hora = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${min}:${sec}`

    let meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Nov','Dic']
    let dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab']
    let diaSemana = dias[fecha.getDay()];
    let mes = meses[fecha.getMonth()];

    document.getElementById('fecha').innerHTML = `${fecha.getFullYear()}-${mes}-${diaSemana}-${fecha.getDay()} `
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = ( hora) =>{
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}

setInterval(mostrarReloj,1000)