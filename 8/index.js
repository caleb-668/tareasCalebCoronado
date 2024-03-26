const persona = {
    nombre: "Caleb",
    apellido: "Coronado",
    edad: 21,
    sexo: "todo los dias",
    habilidades: "cocinar"
}
function mostrar(persona) {
    for (const key in persona) {
        console.log(key+": ", persona[key]);
    }
}
mostrar(persona)