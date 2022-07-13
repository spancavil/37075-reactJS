import React, { useEffect } from 'react'

const ModalConEscape = ({handleClose}) => {

    useEffect(() => {

        const handleEsc = (evt) => {
            if (evt.keyCode === 27) {
                console.log('will close')
                handleClose(false)
            }
            console.log(evt) //Evento nativo.
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };

    }, [])

    const handleClick = (evento) => {
        console.log(evento);
        console.log(evento.nativeEvent)
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                backgroundColor: 'rgb(0,0,0, 0.6)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
            }}
        >
            <div
                style={{
                    width: '50%',
                    height: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'beige',
                    borderRadius: '10px',
                    borderColor: 'black',
                    borderWidth: '3px',
                }}
                onClick={handleClick}
            >
                <p>Press escape for exit</p>
            </div>
        </div>
    )
}

export default ModalConEscape