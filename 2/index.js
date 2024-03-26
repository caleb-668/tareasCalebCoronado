let variableExterna = "Variable externa";

function miFuncion() {
    let variableInterna = "Variable interna";    
    console.log("Dentro de la función - Variable externa:", variableExterna);
}
//no es posible acceder a una variable por fuera que se define dentro de una funcion, su alcance y su uso se limita a ser usado solo dentro de tal funcion y es llamada varaible LOCAL
//al contrario de la primera varaible su uso y alcance no es limitado, se puede acceder a ella dentro o fuera de una funcion, y es llamada varaible GLOBAL 
miFuncion();
console.log("Fuera de la función - Variable externa:", variableExterna);