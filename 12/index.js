const palabra = "hola mundo"
//primer metodo para saber el tama;o de la palabra
console.log(palabra.length);
//segundo metodo que separa las letras de una papalbar
for(letras of palabra){
    console.log(letras);
}
//tercer metodo que devuelve la posicion de la primera letra de una palabra que le ponemos como parametro y devuelve -1 si dicha palabra no existe dentro de nuestro String
console.log(palabra.indexOf("hola"));
console.log(palabra.indexOf("mundo"));
console.log(palabra.indexOf("adios"));
//cuarto metodo que convierte de minuscula a mayuscula un string
console.log(palabra.toUpperCase());
//quinto metodo que convierte de mayuscula a minuscula un string
const palabraMayus = "HOLA MUNDO"
console.log(palabraMayus.toLowerCase());
//sexto metodo que concatena o une una o mas cadenas con la cadena actual y retorna una nueva cadena resultante
const stringUno = "hola"
const stringDOs = "mundo"
console.log(stringUno.concat(" ", stringDOs));
//septimo metodo que devuelve la letra de una cadena en la posicion que se desee
console.log(palabra.charAt(2));
console.log(palabra.charAt(4));
//octavo metodo que devuelve un punto de codigo unicode, o sea que devuelve un valor unico a dicha letra en la poicion que se le da como parametro (a lo que entendi), cada caracter tiene un valor unico en el punto de codigo Unicode
console.log(palabra.codePointAt(5));