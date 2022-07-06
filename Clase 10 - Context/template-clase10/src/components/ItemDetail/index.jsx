import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import ButtonCount from '../ButtonCount';
import './styles.css'

const ItemDetail = ({ product }) => {

    const navigate = useNavigate();

    product.stock = 10;
    const [qtyAdded, setQtyAdded] = useState(0);

    const {addItem} = useContext(Shop)

    const handleConfirm = (qty) => {
        setQtyAdded(qty);
    }

    const handleTerminate = () => {
        addItem(product, qtyAdded)
        navigate('/cart')
    }

    console.log(qtyAdded);

    return (
        <div className='container-detail'>
            <h1>{product.title}</h1>
            <img src={product.image} alt="product-detail" />
            <p>{product.description}</p>
            {!qtyAdded ?
                <ButtonCount onConfirm={handleConfirm} maxQuantity={product.stock} />
                :
                <button onClick={handleTerminate}>Terminar compra</button>
            }
        </div>
    )
}

export default ItemDetail