import React, { useState } from 'react'

const ItemCount = ({handleAdd, initialStock}) => {

    const [count, setCount] = useState(0)

    const onAdd = () => {

    } 

    const onDecrement = () => {

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={onAdd}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={handleAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount