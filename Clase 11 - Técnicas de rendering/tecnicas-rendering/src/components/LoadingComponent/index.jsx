import React, { useEffect } from 'react'

const LoadingComponent = () => {
    const [loading, setLoading] = React.useState(true);

    const setteoLoader = () => {
        setLoading(false);
    }

    useEffect(()=> {
        setTimeout(setteoLoader, 2500)
    }, [])
    
    return (
        
        <h3>LoadingComponent: {loading ? "cargando..." : "cargó!"}</h3>
    )
}

export default LoadingComponent