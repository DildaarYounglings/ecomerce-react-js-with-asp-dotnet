import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ShoppingCart } from './components/ShoppingCart';
import './custom.css';

export const App = () => {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [productsArray, setProductsArray] = useState([{ imageUrl: "", productName: "ddddddd", price: "R 20,00" }]);
    const [loading, setLoading] = useState(true);
    async function populateProducts() {
        const response = await fetch('products');
        const data = await response.json();
        setProductsArray(data);
        setLoading(false)
    }
    useEffect(() => {
        populateProducts();
    },[])
    return (
      <Layout>
            <Routes>
                <Route path={"/"} element={<Home shoppingCartState={{ shoppingCart, setShoppingCart }} productsInfo={{ productsArray, loading }} />} />
                <Route path={"/shoppingCart"} element={<ShoppingCart shoppingCartState={{ shoppingCart, setShoppingCart }} />} />
            </Routes>
      </Layout>
    );
}
export default App;
