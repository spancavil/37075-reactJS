import React, { useState } from 'react';
import ButtonCount from '../components/ButtonCount';
import MemoizedCount from '../components/MemoizedCount';

const CounterContainer = () => {

    const handleConfirm = () => {
        console.log("Se agrego al cart");
    }

    const [state, setState] = useState(false)
    const counters = [
        {
            onConfirm: React.useCallback(handleConfirm, []),
            maxQuantity: 10
        },
        {
            onConfirm: React.useCallback(handleConfirm, []),
            maxQuantity: 15
        },
        {
            onConfirm: React.useCallback(handleConfirm, []),
            maxQuantity: 3
        }
    ]
    return (
        <>
            {counters.map((counter, index) => {
                return <MemoizedCount
                    maxQuantity={counter.maxQuantity}
                    onConfirm={counter.onConfirm}
                    id = {index}
                    key = {index}
                />
            })}
            <button onClick={() => setState(!state)}>Change state</button>
            <h2>El estado está en: {state.toString()}</h2>
        </>
    )
}

export default CounterContainer;