/*let miPromesa = new Promise((resolver,rechazado) => {
    let expresion = false;
    if(expresion){
        resolver('Resolvió correctamente')
    }else{
        rechazado('Se produjo un error');
    }
});*/
//creamos un objeto Promesa, el cual  recibe una funcion de tipo flecha con dos argumentos los cuales uno es  si se cumple y el otro es sino se cumple/ se ha creado una promesa

//llamamos el metodo then() que recibe dos argumentos que son dos funciones de tipo flecha con esta formo podemos evitar usa catch 

//miPromesa.then((valor) =>console.log(valor),(error) =>console.log(error))

//usando el metodo then() y catch()
//miPromesa.then((valor) => console.log(valor)).catch((error) => console.log(error))

let promesa = new Promise((resolver) => {
  //  console.log('inicio Promesa');
    setTimeout(()=> resolver('saludos con promesa y timeout'),3000);
    //console.log('fin de promesa ')
});

//promesa.then((valor)=> console.log(valor))

//la palabra Async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return 'Saludos con promesa y async '
}
//miFuncionConPromesa().then((valor) => console.log(valor))

//ASYNC Y AWAIT
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise((resolver) =>{
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}
//funcionConPromesaYAwait();

//Promesas, await, async y setTimeout
//no puedes usar await sin usar async
async function mifuncionCompromesaAwaitTimeOut(){
    let miPromesa = new Promise((resolver) => {
        console.log('inicio de promesa');
        setTimeout(() => resolver('promesa con await y timeout'),3000)
        console.log('Fin de promesa')
    });
    console.log(await miPromesa);
}
mifuncionCompromesaAwaitTimeOut();
