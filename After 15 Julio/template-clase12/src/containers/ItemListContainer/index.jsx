import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
// import yerbaMate from '../../assets/yerba-mate.webp';
import { useParams } from 'react-router-dom';
import ModalConEscape from '../../components/ModalConEsc';
import ButtonCount from '../../components/ButtonCount';
import InputCount from '../../components/InputCount';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import useFirebaseGetProducts from '../../hooks/useFirebaseGetProducts';

const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])
  // const [productosFiltrados, setProductosFiltrados] = useState([])
  const [modalVisible, setModalVisible] = useState(true)
  
  const [productosHook, loading, error] = useFirebaseGetProducts()

  console.log(productosHook, loading, error);

  const params = useParams()

  console.log(params);

  useEffect(() => {

    const getProductos = async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          productos.push({ id: doc.id, ...doc.data() })
        });

        // console.log(productos);
        // const response = await fetch('https://fakestoreapi.com/products');
        // const data = await response.json()
        if (params?.categoryId) {
          console.log(params.categoryId)
          console.log("entra a filtrar");
          const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
          setProductos(productosFiltrados)
        }
        else {
          setProductos(productos);
        }
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }

    getProductos()

  }, [params])

  /*  useEffect(() => {
   }, [params, productos]) */

  // console.log(productos);

  const handleConfirm = (quantity) => {
    console.log("Se agregó la cantidad: " + quantity);
  }
  const type = "input"

  const Count = type === "button" ? ButtonCount : InputCount;

  return (
    <div>
      {
        productos.length !== 0 ?
          // true ?
          // modalVisible && <ModalConEscape handleClose={setModalVisible}/>
          // <Count onConfirm={handleConfirm} maxQuantity={10}/>
          <ItemList products={productos} />
          :
          <p>Loading...</p>
      }
    </div>
  )
}

export default ItemListContainer