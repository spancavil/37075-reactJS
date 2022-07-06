import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import Item from '../Item'

const ItemList = ({ products }) => {

  const {setEstadoA} = useContext(Shop)

  const handleChangeState = () => {
    setEstadoA("Otro valor")
  }

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
      <button onClick={handleChangeState}>Cambio estado A</button>
    </div>
  )
}

export default ItemList