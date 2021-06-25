import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Header from './components/header/Header';
import Products from './components/products/Products';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import Cart from './components/cart/Cart';
import ProductDetails from './components/productDetails/ProductDetails';
import {ProductProvider} from './components/productStoreContext/ProductStoreContext'
import CheckoutPage from './components/CheckoutPage';
import ProductChart from './components/chart/ProductChart';



function App() {
  


  return (
    <ProductProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Redirect path='/' component={Products} />
          <Route exact path='/' component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='/productDetails/:productName' component={ProductDetails} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route path='/chart' component={ProductChart} />
        </div>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
