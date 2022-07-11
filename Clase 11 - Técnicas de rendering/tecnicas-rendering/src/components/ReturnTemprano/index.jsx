import React from 'react'

const ReturnTemprano = ({condition}) => {

    console.log(condition);
    if (condition) {
        return (
            <h3>La condicion es correcta</h3>
        )
    }
    return (
        <h3>La condición es false</h3>
    )
}

export default ReturnTemprano