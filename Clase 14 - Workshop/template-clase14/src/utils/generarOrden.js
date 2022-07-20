//Función auxiliar para generar la orden.
const ordenGenerada = (nombre, direccion, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            direccion: direccion
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada;