//Destructuring de objetos
const persona1 = {
    nombre: "Oscar",
    apellido: "De la Hoya",
    edad: 45,
    estadoCivil: "soltero",
    cantidadCampeonatos: 30,
    nacionalidad: "mexicanestadounidense"
}

// console.log(persona1.nombre)

const {nombre, estadoCivil, cantidadCampeonatos: campeonatos} = persona1;

// console.log(nombre);
// console.log(campeonatos);
// console.log(cantidadCampeonatos);

//Destructuring de arrays
const personajes = ["nautilus", "amumu", "master yi", "ryze", "kyle"]

console.log(personajes[3])

const [primerPersonaje, segundoPersonaje, ...restoPersonajes] = personajes;

console.log(primerPersonaje);
console.log(restoPersonajes);

//Spread operator
const persona2 = {
    ...persona1,
    sueldo: '23K USD'
}

const personajesCopia = [...personajes]

console.log(persona2);

//Función map, find
const personajesProcesados = personajes.map(personaje => {
    return `<p>${personaje}</p>`
})

console.log(personajesProcesados);

const personajeEncontrado = personajes.find(personaje => personaje === "nautilus")

console.log(personajeEncontrado);