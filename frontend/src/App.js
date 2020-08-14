import React from 'react';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <div className="container">
    <header className="header">
    <div className="logo-title">
    <button onClick={openMenu}>&#9776;</button>
        <a href="index.html">Plantaeshop</a>
    </div>
    <div className="header-links">
        <a href="">Basket</a>
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
            <ul className="products">
                <li>
                    <div className="product">
                        <a href="product.html"> <img className="product-image" src="image\product1.jpg" alt="Image of product" /></a>
                        <div className="product-name"><a href="product.html">Alkarty Lotus Seeds</a></div>
                        <div className="product-category">Seeds</div>
                        <div className="product-price">$40.99</div>
                        <div className="product-rating">4.5 stars</div>
                    </div>
                </li>
                <li>
                    <div className="product">
                        <a href="product.html"> <img className="product-image" src="image\product1.jpg" alt="Image of product" /></a>
                        <div className="product-name"><a href="product.html">Alkarty Lotus Seeds</a></div>
                        <div className="product-category">Seeds</div>
                        <div className="product-price">$40.99</div>
                        <div className="product-rating">4.5 stars</div>
                    </div>
                </li>
                <li>
                    <div className="product">
                        <a href="product.html"> <img className="product-image" src="image\product1.jpg" alt="Image of product" /></a>
                        <div className="product-name"><a href="product.html">Alkarty Lotus Seeds</a></div>
                        <div className="product-category">Seeds</div>
                        <div className="product-price">$40.99</div>
                        <div className="product-rating">4.5 stars</div>
                    </div>
                </li>
                <li>
                    <div className="product">
                        <a href="product.html"> <img className="product-image" src="image\product1.jpg" alt="Image of product" /></a>
                        <div className="product-name"><a href="product.html">Alkarty Lotus Seeds</a></div>
                        <div className="product-category">Seeds</div>
                        <div className="product-price">$40.99</div>
                        <div className="product-rating">4.5 stars</div>
                    </div>
                </li>
                <li>
                    <div className="product">
                        <a href="product.html"> <img className="product-image" src="image\product1.jpg" alt="Image of product" /></a>
                        <div className="product-name"><a href="product.html">Alkarty Lotus Seeds</a></div>
                        <div className="product-category">Seeds</div>
                        <div className="product-price">$40.99</div>
                        <div className="product-rating">4.5 stars</div>
                    </div>
                </li>
            </ul>
        </div>
    </main>
    <footer className="footer">
        &copy; All rights reserved 2020  
    </footer>
</div>
  );
}

export default App;
