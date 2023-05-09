let exponente = 3**2;
console.log(exponente)

let num = Math.pow(3,2);
console.log(num)
num;
 
let a = 3, b = 2, c = "3"; 
let z= a == c;  //se revisa el valor sin importar el tipo 
//no revisa el tipo solo el valor 
console.log(z);
 

/**operador de igualdad estricta  */
z = a === c;
console.log(z);//revisa los valores pero, también los tipos 

//diferente de !=
z = a!=c;
console.log(z);
z = a !== c;
console.log(z);

let s = 11;

if (s % 2 == 0 ) {
    console.log("el numero es par");
}else{
    console.log("el numero es impar");
}
