import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';


import HomePage from './pages/homepage/homepage.compenent.jsx'
import ShopPage from './pages/shop/shop.components.jsx'
import Header from './components/header/header.component.jsx'

function App() {
  return (
    <div>
    <Header/>
    <switch>
    
      <Route exact path='/' component= {HomePage} />
      <Route path='/shop' component= {ShopPage} />
    </switch>
    </div>
  );
}

export default App;
