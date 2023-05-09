//let autos = new Array('Tsuru','BMW','Acura'); forma que ya no se usa
const autos = ['Tsuru', 'Jetta','Acura'];
console.log(autos);

console.log(autos[0]);

autos.push('Sara');
// usamos push para agregar elmentos
console.log(autos);

const numeros = [];
for(let index = 0; index <= 10; index++){
    numeros.push(Math.round(Math.random() * 10))
}
console.log(numeros);
//otra forma de agregar un elemento a un arreglo

console.log(autos.length)
//autos(autos.length) = 'Cooper';
console.log(autos);

//para saber si es un arreglo 

console.log(Array.isArray(autos));
console.log(autos instanceof Array);
