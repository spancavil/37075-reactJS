//Agregar algunos personajes más
/* 
Otro comentario
*/

const heroes = ["Wonderwoman", "Superman", "Aquaman", "Flash"]

console.log(heroes.length); // 4

console.log(heroes[3]); //Flash (la ultima posición del array)

/* Tipos de variables primitivas
const nombre = "Sebas" //String
const edad = 18 //Number
const estaVacunadoCOVID = true //Boolean
 */

heroes.push("Batman")

console.log(heroes[4]); //Batman

//Tener acceso a los elementos del DOM
const showButton = document.getElementById("show")
const hideButton = document.getElementById("hide")
const searchInput = document.getElementById("search")
const lista = document.getElementById("list")

//Añadir funcionalidad para mostrar personajes

showButton.addEventListener('click', ()=> {
    let content = '';
    for (const hero of heroes) {
        content += `<li>${hero}</li>`
    }
    lista.innerHTML = content
})

//Añadir funcionalidad para ocultar personajes

hideButton.addEventListener('click', ()=> {
    lista.innerHTML = ''
})

//Por último mostrar sólo los filtrados
searchInput.addEventListener('keyup', (event)=> {
    console.log(event.target.value);
    const filtro = event.target.value
    const heroesFiltrados = heroes.filter(hero => hero.toLowerCase().includes(filtro.toLowerCase()))
    console.log(heroesFiltrados);
    let content = '';
    for (const hero of heroesFiltrados) {
        content += `<li>${hero}</li>`
    }
    lista.innerHTML = content
})