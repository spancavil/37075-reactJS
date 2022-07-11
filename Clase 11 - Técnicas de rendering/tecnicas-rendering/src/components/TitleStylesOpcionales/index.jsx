import React from 'react';
import './styles.css'

const TitleStylesOpcionales = ({title, styles}) => {
  return (
        <h2
        style={{...styles}}
        className="title"
        >{title}</h2>

  )
}

export default TitleStylesOpcionales