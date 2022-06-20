import './App.css';
// import Input from './components/Input';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer greeting="Hola Coders!">
        <h2>Este es el item list container</h2>
      </ItemListContainer>
      {/* <Input valorPlaceholder={"Hola"} title={"cómo estás?"}/>
      <Input valorPlaceholder={"Hola"} title={"cómo estás?"}/> */}
    </div>
  );
}

export default App
