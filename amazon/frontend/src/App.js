import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">Coctail Shop</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <Link to="/Signin">Sign In</Link>
                
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="index.html">Pinja Colada</a>
                </li>
                <li>
                    <a href="index.html">Mohito</a>
                </li>
                <li>
                    <a href="index.html">Longisland Icetea</a>
                </li>
                <li>
                    <a href="index.html">Mai Thai</a>
                </li>
                <li>
                    <a href="index.html">Tequlia Sunrise</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
              <Route path="/Signin" component={SigninScreen} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
                
            </div>
        </main>
        <footer className="footer">
            All right reserved.
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
