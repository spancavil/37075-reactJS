import React from 'react'
import Item from '../Item'

const ItemList = ({ products }) => {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
      {products.map(producto => {
        return <Item product={producto} key={producto.id} />
      })}
    </div>
  )
}

export default ItemList