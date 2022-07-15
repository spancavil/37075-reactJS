import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config';

const useFirebaseGetProducts = () => {

    const [productosHook, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{

        (async()=> {
            try {
                setLoading(true)
                const q = query(collection(db, "products"));
                const querySnapshot = await getDocs(q);
                const productos = []
                querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  // console.log(doc.id, " => ", doc.data());
                  productos.push({ id: doc.id, ...doc.data() })
                });
                setProductos(productos)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        })()

    },[])

    return [productosHook, loading, error]
}

export default useFirebaseGetProducts