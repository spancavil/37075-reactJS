import { addDoc, collection } from 'firebase/firestore';
import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import { db } from '../../firebase/config';
import ordenGenerada from '../../utils/generarOrden';
import guardarOrden from '../../utils/guardarOrden';

const Cart = () => {
  const { cart } = useContext(Shop);

  const confirmarOrden = async () => {
    const orden = ordenGenerada("Sebas", "Calle falsa 123", cart, 1240);
    guardarOrden(cart, orden)

    // Add a new document with a generated id.
    // const docRef = await addDoc(collection(db, "orders"), orden);
    // console.log("Document written with ID: ", docRef.id);
    
  }

  return (
    <>
      <ul>
        {cart.map(producto => {
          return <li key={producto.id}>{producto.title} <img src={producto.image} width='80px' alt={producto.title} /></li>
        })}
      </ul>
      <button onClick={confirmarOrden}>Confirmar compra</button>
    </>
  )
}

export default Cart