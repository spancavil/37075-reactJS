//Declaración de la promesa
const promesa = new Promise ((accept, reject) => {
    console.log("Hola en promise");
    accept({value: "Se cumple la promise"})
})

/* promesa.then(
    result => console.log(`Se resolvió bien: ${result.value}`),
    error => console.log(`Hubo un error: ${error.value}`)
) */

//Otra forma
promesa
.then(result => console.log("Se cumplió la promesa"))
.catch(error => console.log("Hubo un error"))