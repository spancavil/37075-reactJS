import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import getCollection from '../../utils/getCollection';

console.log(getCollection);

const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const params = useParams()

  useEffect(() => {

    const getProductos = async () => {
      try {
        const productos = await getCollection("products");
        setProductos(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }
    getProductos()
  }, [])

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productos)
    }
  }, [params, productos])

  return (
    <div>
      {
        productos.length !== 0 ?
          
          <ItemList products={productosFiltrados} />
          :
          <p>Cargando...</p>
      }
    </div>
  )
}

export default ItemListContainer