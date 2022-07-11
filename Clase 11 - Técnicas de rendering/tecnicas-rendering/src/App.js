import './App.css';
import BinaryOperator from './components/BinaryOperator';
import LoadingComponent from './components/LoadingComponent';
import ReturnTemprano from './components/ReturnTemprano';
import Title from './components/Title';
import TitleClass from './components/TitleClass';
import TitleStylesOpcionales from './components/TitleStylesOpcionales';
import CounterContainer from './CounterContainer';

function App() {
  return (
    <div>
      {/* <LoadingComponent/>
      <ReturnTemprano/>
      <BinaryOperator condition={0}/>
      <Title type="Importante" title="No hay stock disponible"/>
      <TitleClass type="Importante" title="Una frase no muy importante"/>
      <TitleStylesOpcionales title="Coderhouse" styles={{color: 'blue'}}/> */}
      <CounterContainer/>
    </div>
  );
}

export default App;
