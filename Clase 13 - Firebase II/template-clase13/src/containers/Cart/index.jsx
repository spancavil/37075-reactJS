import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import ordenGenerada from '../../utils/generarOrden';
import guardarOrden from '../../utils/guardarOrden';

const Cart = () => {
  const {cart} = useContext(Shop);

  const confirmarOrden = () => {
      const orden = ordenGenerada("Sebas", "Calle falsa 123", cart, 1240);
      guardarOrden(cart, orden)
  }

  return (
    <>
      <ul>
        {cart.map(producto => {
          return <li key={producto.id}>{producto.title} <img src={producto.image} width='80px' alt={producto.title}/></li>
        })}
      </ul>
      <button onClick={confirmarOrden}>Confirmar compra</button>
    </>
  )
}

export default Cart