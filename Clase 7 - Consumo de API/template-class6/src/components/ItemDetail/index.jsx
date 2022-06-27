import React from 'react'

const ItemDetail = ({ product }) => {
    console.log(product);
    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image}/>
            <p>{product.description}</p>
        </div>
    )
}

export default ItemDetail