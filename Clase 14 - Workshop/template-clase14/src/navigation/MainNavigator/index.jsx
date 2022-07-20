import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../../components/NavBar';
import NotFound from '../../components/NotFound';
import Cart from '../../containers/Cart';
import ItemDetailContainer from '../../containers/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer';

const MainNavigator = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />}></Route>
                <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
                <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainNavigator;