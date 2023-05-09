const personas = [
    new Persona('Juan','Perez'),
    new Persona('Karla','Garcia')
];

function mostrarPersonas(){
    console.log('Mostrar Personas')
    let texto = '';
    for (const persona of personas) {
        console.log(persona);
        texto += `<li> ${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersonas(){
    const forma = document.forms['forma']
    const nombre = forma['nombre']
    const apellido = forma['apellido']

    if(nombre.value != ''&& apellido.value != ''){
        const persona = new Persona(nombre.value,apellido.value);
        console.log(persona)
        personas.push(persona)
        mostrarPersonas();
    }else{
        console.log('No hay infromación que mostrar');
    }
}