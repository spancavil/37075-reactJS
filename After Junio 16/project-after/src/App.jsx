import { Accordion } from '@mui/material';
import './App.css';
import AccordionControlado from './components/AccordionControlado';
import Input from './components/Input';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer greeting="Hola Coders!">
        <AccordionControlado/>
      </ItemListContainer>
    </div>
  );
}

export default App
