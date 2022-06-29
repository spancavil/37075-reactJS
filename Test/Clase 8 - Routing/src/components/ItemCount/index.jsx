import React, { useState } from 'react'

const ItemCount = ({handleAdd, initial, stock}) => {

    const [count, setCount] = useState(initial)

    const onAdd = () => {

    } 

    const onDecrement = () => {

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={onAdd}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={()=> handleAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount