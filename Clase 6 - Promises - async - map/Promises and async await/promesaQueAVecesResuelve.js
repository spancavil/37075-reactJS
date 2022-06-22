const promesa = new Promise ((accept, reject) => {
    console.log("Hola en promise");
    const aceptor = Math.random();
    if (aceptor > 0.5){
        accept({value: "Se acepta la promesa"})
    }
    reject({value: "Se rechaza la promesa"})
})

promesa.then(
    result => console.log(`Se resolvió bien: ${result.value}`),
    error => console.log(`Hubo un error: ${error.value}`)
)

//Otra forma
/* promesa.then(result => console.log(result))
.catch(error => console.log(error)) */