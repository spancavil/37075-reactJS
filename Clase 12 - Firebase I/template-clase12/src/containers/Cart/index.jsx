import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext'

const Cart = () => {
  const {cart} = useContext(Shop);

  console.log(cart);
  return (
    <ul>
      {cart.map(producto => {
        return <li key={producto.id}>{producto.title} <img src={producto.image} width='80px' alt={producto.title}/></li>
      })}
    </ul>
  )
}

export default Cart