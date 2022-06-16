import React from 'react';
import styles from './styles.module.css';

const Input = ({valorPlaceholder, title}) => {

    /* console.log(props);

    const {valorPlaceholder} = props */

    return (
        <input 
            placeholder={`${valorPlaceholder} ${title}`}
            className={styles.appInput}
        />
    )
}

export default Input