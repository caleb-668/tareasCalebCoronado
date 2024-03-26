const arrayUno = ["hola"]
const arrayDos = ["mundo"]
console.log(arrayUno.concat(" ", arrayDos));

arrayUno.push("!")
console.log(arrayUno);

arrayUno.pop()
console.log(arrayUno);

arrayUno.shift()
console.log(arrayUno);

arrayUno.unshift("holaa")
console.log(arrayUno);

const copiaArrayUno = arrayUno.slice()
console.log(copiaArrayUno);

arrayUno.splice(1, 0,"mundo")
console.log(arrayUno);

const cadena = arrayUno.join(", ")
console.log(cadena);