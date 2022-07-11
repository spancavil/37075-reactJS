import React from 'react'

const BinaryOperator = ({ condition }) => {

    return (
        <>
            {condition && (
                <>
                    <p>BinaryOperator</p>
                    <span>Hola Coder</span> 
                </>
            )}
            {!condition && <p>No hay binary operator</p>}
        </>
    )
}

export default BinaryOperator