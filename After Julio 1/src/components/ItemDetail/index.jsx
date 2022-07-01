import React from 'react';
import './styles.css'

const ItemDetail = ({ product }) => {
    console.log(product);
    return (
        <div className='container-detail'>
            <h1>{product.title}</h1>
            <img src={product.image} alt="product-detail"/>
            <p>{product.description}</p>
        </div>
    )
}

export default ItemDetail