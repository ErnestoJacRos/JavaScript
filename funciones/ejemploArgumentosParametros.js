let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 5);
console.log(resultado)

function sumarTodo(){
    let total = 0;

    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total; 
}