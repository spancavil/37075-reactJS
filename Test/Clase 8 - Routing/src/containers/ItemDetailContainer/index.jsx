import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail'

//Obtener los datos de un producto específico
const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        const getProductos = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/1')
                const data = await response.json();
                setProductDetail(data)
            } catch (error) {
                console.log(error)
                setError(error.message)
            }
        }
        getProductos();

    }, [])

    console.log(Object.keys(productDetail).length);

    return (
        Object.keys(productDetail).length !== 0 ?
            <ItemDetail product={productDetail} />
            :
            <p>Loading...</p>
    )
}

export default ItemDetailContainer