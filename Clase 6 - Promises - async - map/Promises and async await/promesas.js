const promesa = new Promise ((accept, reject) => {
    console.log("Hola en promise");
    accept({value: "Resolvió"})
})

promesa.then(
    result => console.log(`Se resolvió bien ${result.value}`),
    error => console.log(`Hubo un error: ${error.value}`)
)

//Otra forma
/* promesa.then(result => console.log(result))
.catch(error => console.log(error)) */