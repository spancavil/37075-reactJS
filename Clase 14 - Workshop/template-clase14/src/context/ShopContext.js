import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    //Agregar un item al carrito, acorde a la cantidad
    const addItem = (producto, cantidad) => {
        console.log(producto, cantidad);
        const productoRepetido = isInCart(producto);
        console.log(productoRepetido);
        if (productoRepetido) {
            productoRepetido.quantity += cantidad
            setCart([...cart])
        } else {
            //Es útil cuando el producto no está presente en el carrito
            setCart([...cart, {...producto, quantity: cantidad}])
        }
    }

    const removeItem = (id) => {
        const productosFiltrados = cart.filter(producto => producto.id !== id)
        setCart(productosFiltrados);
    }

    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id)
    }

    return (
        <Shop.Provider value={{addItem, removeItem, cart}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider