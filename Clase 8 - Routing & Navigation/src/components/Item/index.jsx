import React from 'react'

const Item = ({ product }) => {
  return (
    <div style={
      {
        width: '15%',
        margin: '20px',
        backgroundColor: 'greenyellow',
        border: 0,
        padding: '30px',
        fontSize: '25px',
        boxShadow: '4px 6px 18px 5px rgba(0, 0, 0, 0.85)'
      }}
    > {product.title}</div >
  )
}

export default Item