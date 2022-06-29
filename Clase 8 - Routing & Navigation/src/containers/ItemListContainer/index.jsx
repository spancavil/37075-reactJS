import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
// import yerbaMate from '../../assets/yerba-mate.webp';

const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])

  useEffect(() => {

    const getProductos = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }

    getProductos()

  }, [])

  console.log(productos);

  return (
    <div>
      {productos.length !== 0 ?
        <ItemList products={productos} />
        :
        <p>Loading...</p>
      }
    </div>
  )
}

export default ItemListContainer