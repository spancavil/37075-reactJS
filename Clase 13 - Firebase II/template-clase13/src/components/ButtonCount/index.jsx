import React, { useState } from 'react'

const ButtonCount = ({ onConfirm, maxQuantity }) => {

    const [value, setValue] = useState(1);

    const handleConfirm = () => {
        if (value <= maxQuantity) {
            onConfirm(value)
        }
        else {
            alert("Value > maxQuantity")
        }
    }

    const handleAdd = () => {
        if (value < maxQuantity) {
            setValue(value + 1)
        }
    }


    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <button onClick={handleAdd}>+</button>
            <span>{value}</span>
            <button onClick={() => setValue(value => value-1)}>-</button>
            <button onClick={handleConfirm}>Confirm</button>
        </div>
    )
}

export default ButtonCount