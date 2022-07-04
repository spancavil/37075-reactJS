  //Ver qué sucede sin el return
  
  //On escape it will close
  useEffect(() => {
    const handleEsc = (event) => {
        if (event.keyCode === 27) {
          console.log('will close')
        }
        console.log(event) //Evento nativo del browser    
      };

      window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [])