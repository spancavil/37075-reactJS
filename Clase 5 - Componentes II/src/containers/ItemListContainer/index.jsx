import React from 'react';
// import yerbaMate from '../../assets/yerba-mate.webp';

const ItemListContainer = ({greeting, children}) => {
  return (
    <div>
        {/* {children} */}
        <p>{greeting}</p>
        <img src='/assets/yerba-mate.webp' alt="yerba"/>
    </div>
  )
}

export default ItemListContainer