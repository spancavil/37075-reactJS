import React from 'react'
import Item from '../Item'

const ItemList = ({products}) => {
  return (
    <ul>
        {products.map(producto => {
            return <Item product={producto} key={producto.id}/>
        })}
    </ul>
  )
}

export default ItemList