import './App.css';
import NavBar from './components/NavBar';

function App() {

  /* const nombre = "Sebas"
  const edad = 22
  const trabajos = {
    maniana: "Profe",
    tarde: 'joyero',
    noche: "",
  } */

  return (
    <div className='container'>
      {/* <div className="app">
        <p>{nombre}</p>
        <p>Ancavil</p>
        <p>Edad: {edad}</p>
        <h1>Trabajos</h1>
        <p>{trabajos.maniana}</p>
        <p>{trabajos.tarde}</p>
        <input placeholder='Ingrese lo que quiera'/>
      </div> */}
      <NavBar/>
    </div>
  );
}

export default App;
