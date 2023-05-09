function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

miFuncion1();
miFuncion2();

//funcion callback
function imprimir(mesanje){
    console.log(mesanje);
}

function sumar(n1,n2,funcioCallBack){
    let res = n1 + n2;
    funcioCallBack(`Resultado: ${res}`);
}

sumar(5,3,imprimir);


//Lamadas asíncronas con el uso setTimeOut

function miFuncioCallBack(){
    console.log('Saludo asíncrono después de 8 seg')
}

setTimeout(miFuncioCallBack,8000);

//declarar las funcin dentro del setTimeout
setTimeout(function(){console.log('saludo asíncrono 2')},4000)

//funcion flecha dentro de setTimeout

setTimeout(() => console.log('saludo asíncrono 3',5000))
