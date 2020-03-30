import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';


import HomePage from './pages/homepage/homepage.compenent.jsx'
import ShopPage from './pages/shop/shop.components.jsx'


function App() {
  return (
    <div>
    <switch>
    
    <Route exact path='/' component= {HomePage} />
    <Route path='/shop' component= {ShopPage} />
    </switch>
    </div>
  );
}

export default App;
