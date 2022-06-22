import React from 'react';
import './styles.css';

const Input = ({valorPlaceholder, title}) => {

    /* console.log(props);

    const {valorPlaceholder} = props */

    return (
        <input 
            placeholder={`${valorPlaceholder} ${title}`}
            className='app-input'
        />
    )
}

export default Input