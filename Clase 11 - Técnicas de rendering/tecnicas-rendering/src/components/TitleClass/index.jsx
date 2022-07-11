import React from 'react';
import './styles.css';

const TitleClass = ({ type = "Importante", title}) => {

    return (
        <h2
            className={type === "Importante" ? "important": "no-important"}
        >{title}</h2>
    )
}

export default TitleClass