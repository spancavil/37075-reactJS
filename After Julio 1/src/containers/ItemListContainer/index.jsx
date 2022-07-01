import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
// import yerbaMate from '../../assets/yerba-mate.webp';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

  console.log(greeting);

  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const params = useParams()

  console.log(params);

  //Se traen todos los productos y se guarda en un state llamado productos. Este state permanece constante.
  useEffect(() => {

    const getProductos = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json()
        setProductos(data);
        setProductosFiltrados(data);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }
    getProductos()
  }, [])

  //Se hace el filtro de productos según vengan o no parámetros. Y se guarda en un state llamado productosFiltrados.
  useEffect(() => {

    //En caso que vengan params se filtra a los productos y se guarda en productosFiltrados
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
      setProductosFiltrados(productosFiltrados)
    }
    //En caso que no vengan params se guardan los productos originales dentro de productosFiltrados
    else {
      setProductosFiltrados(productos)
    }

  }, [params, productos])

  console.log(productos);

  return (
    <div>
      {productos.length !== 0 ?
        <ItemList products={productosFiltrados} />
        :
        <p>Loading...</p>
      }
    </div>
  )
}

export default ItemListContainer