import React, { useState } from 'react'

const InputCount = ({ onConfirm, maxQuantity }) => {
    const [value, setValue] = useState(0)

    const handleConfirm = () => {
        if (value <= maxQuantity) {
            onConfirm(value)
        }
        else {
            alert("Value > maxQuantity")
        }
    }

    return (
        <div>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={handleConfirm}>Confirm</button>
        </div>

    )
}

export default InputCount