import React from 'react';
import data from  './data';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <Router >
    <div className="container">
    <header className="header">
    <div className="logo-title">
    <button onClick={openMenu}>&#9776;</button>
        <Link to='/'>Plantaeshop</Link>
    </div>
    <div className="header-links">
        <a className="basket-icon" href=""><ShoppingBasketIcon /></a>
        <a href="">Sign in</a>  
    </div>        
    </header>
    <aside className="sidebar">
        <div className="sidebar-header">
             <h3>Shopping Catagories</h3>
        <button className="close-button" onClick={closeMenu}>x</button>
        </div>
       
        <ul>
            <li>
                <a href="index.html">Seeds</a>
                
            </li>
            <li>
                <a href="index.html">Plants</a>
            </li>
        </ul>
    </aside>
    <main className="main">
        <div className="plants-product-display">
        <Route path="/product/:id" component={ProductPage} />
          
        <Route path="/" exact={true} component={HomePage} />
          
        </div>
    </main>
    <footer className="footer">
        &copy; All rights reserved 2020  
    </footer>
</div>
</Router>
  );
}

export default App;
