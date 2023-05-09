"use strict"

try{
    let  x = 545;
    throw 'Mi error'
   

}catch(error){
    console.log(error)
}finally{
    console.log('termina la revisión de errores')
}
console.log('Continuamos..!')

