import React from 'react';
import Input from '../../components/Input';
// import yerbaMate from '../../assets/yerba-mate.webp';

const ItemListContainer = ({greeting, children}) => {
  console.log(children);
  return (
    <div>
        <p>{greeting}</p>
        <img src='/assets/yerba-mate.webp' alt="yerba"/>
        {children}
        <button className='btn btn-primary lg'>Presione aquí</button>
        <Input/>
    </div>
  )
}

export default ItemListContainer