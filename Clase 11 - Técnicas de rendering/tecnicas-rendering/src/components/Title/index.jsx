import React from 'react'

const Title = ({ type = "Importante", title}) => {

    return (
        <h2
            style={{
                fontSize: type === "Importante" ? 32 : 22 
            }}
        >{title}</h2>
    )
}

export default Title