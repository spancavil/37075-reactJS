import './App.css';
import Input from './components/Input';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className='container'>
      <NavBar/>
      <Input valorPlaceholder={"Hola"} title={"cómo estás?"}/>
      <Input valorPlaceholder={"Hola"} title={"cómo estás?"}/>
    </div>
  );
}

export default App
