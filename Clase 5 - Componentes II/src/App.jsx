import { useState } from 'react';
import './App.css';
// import Input from './components/Input';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  const [containerVisible, setContainerVisible] = useState(true)

  const onHideContainer = () => {
    setContainerVisible(false)
  }

  return (
    <div className='container'>
      <NavBar />
      {containerVisible ?
        <ItemListContainer greeting="Hola Coders!">
          <h2>Este es el item list container</h2>
        </ItemListContainer>
        :
        null
      }
      <button onClick={onHideContainer}>Desmontar ItemListContainer</button>
      {/* <Input valorPlaceholder={"Hola"} title={"cómo estás?"}/>
      <Input valorPlaceholder={"Hola"} title={"cómo estás?"}/> */}
    </div>
  );
}

export default App
