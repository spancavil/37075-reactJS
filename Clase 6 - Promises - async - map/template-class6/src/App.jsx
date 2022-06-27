import ItemDetailContainer from '../../../Clase 7 - Consumo de API/template-class6/src/containers/ItemDetailContainer';
import './App.css';
// import Input from './components/Input';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  return (
    <div className='container'>
      <NavBar />
      {/* <ItemListContainer greeting="Hola Coders!"/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App
