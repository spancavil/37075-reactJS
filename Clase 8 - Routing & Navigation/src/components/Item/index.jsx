import React from 'react';
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {

  const navigate = useNavigate();

  const handleDetail = ()=> {
    console.log("Navega hacia el detail");
    navigate(`/detail/${product.id}`)
  }

  return (
    <div style={
      {
        width: '15%',
        margin: '20px',
        backgroundColor: 'greenyellow',
        border: 0,
        padding: '30px',
        fontSize: '25px',
        boxShadow: '4px 6px 18px 5px rgba(0, 0, 0, 0.85)'
      }}
      onClick={handleDetail}
    > {product.title}</div >
  )
}

export default Item