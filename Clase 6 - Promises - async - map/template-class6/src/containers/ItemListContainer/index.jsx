import React, { useEffect, useState } from 'react';
import ItemCount from '../../components/ItemCount';
// import yerbaMate from '../../assets/yerba-mate.webp';

const ItemListContainer = ({ greeting, children }) => {

  //let color = "blue";
  const [color, setColor] = useState("blue");

  const cambiarColor = () => {
    // color = "red";
    // console.log(color)
    if (color === "blue") setColor("red")
    else setColor("blue")
  }

  useEffect(() => {
    console.log("Se montó/actualizó el componente")
  }, [color])
  
  useEffect(() => {
    //Se desmonta el componente
    return () => {
      console.log("Se está desmontando el ItemListContainer");
    }
  }, [])

  console.log("Se rerenderiza el componente")

  const handleAdd = () => {
    console.log("Se agrego al carrito")
  }

  return (
    <div style={{ backgroundColor: color }}>
      {/* {children} */}
      <p>{greeting}</p>
      <p>{color}</p>
      <button onClick={cambiarColor}>
        Cambiar el color a red
      </button>
      <ItemCount handleAdd={handleAdd} initialStock={10}/>
      {/* <img src='/assets/yerba-mate.webp' alt="yerba"/> */}
    </div>
  )
}

export default ItemListContainer