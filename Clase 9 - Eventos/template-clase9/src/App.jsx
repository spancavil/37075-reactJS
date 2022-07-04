import './App.css';
// import Input from './components/Input';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from './components/NotFound';
import Cart from './containers/Cart';

function App() {

  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>       
    </BrowserRouter>
  );
}

export default App
