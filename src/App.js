import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import ShoppingIndex from './components/shoppingIndex';
import AddGame from './views/addGame';
import EditGame from './views/editGame';
import Cart from './views/cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() => <ShoppingIndex />} />
        <Route exact path='/add_game' render={() => <AddGame />} />
        <Route path='/edit_game/' render={() => <EditGame />} />
        <Route path='/cart' render={() => <Cart />} />
      </Switch>
    </div>
  );
}

export default App;
