import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ShoppingCart } from './components/ShoppingCart';
import './custom.css';

export const App = () => {
    const [shoppingCart, setShoppingCart] = useState([]);
    return (
      <Layout>
            <Routes>
                <Route path={"/"} element={<Home shoppingCartState={{ shoppingCart, setShoppingCart }} />} />
                <Route path={"/shoppingCart"} element={<ShoppingCart shoppingCartState={{ shoppingCart, setShoppingCart }} />} />
            </Routes>
      </Layout>
    );
}
export default App;
