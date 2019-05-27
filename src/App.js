import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import ShoppingIndex from './components/shoppingIndex';
import AddGame from './views/addGame';
import EditGame from './views/editGame';
import Cart from './views/cart';
import Checkout from './views/checkout';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() => <ShoppingIndex />} />
        <Route exact path='/add_game' render={() => <AddGame />} />
        <Route path='/edit_game/' render={() => <EditGame />} />
        <Route path='/cart' render={() => <Cart />} />
        <Route path='/checkout' render={() => <Checkout />} />
      </Switch>
    </div>
  );
}

export default App;
