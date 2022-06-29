import './App.css';
// import Input from './components/Input';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
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
