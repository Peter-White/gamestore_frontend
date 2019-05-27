import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import GameTable from '../gameTable'

class ShoppingIndex extends Component {
  constructor() {
    super();
    this.state = {
      "games": []
    }
  }

  componentWillMount = async() => {
    let URL = "http://localhost:5000/api/games";
    let response = await fetch(URL);
    let data = await response.json();

    this.setState({ 'games' : data });
  }

  addToCart = async(id) => {
    let URL = `http://localhost:5000/api/cart/save`;
    let response = await fetch(URL, {
        headers: {
          'Content-Type': 'application/json',
          'game_id': id
        }
      });

    let data = await response.json();

    if(data.Success) {
      alert("Game added")
    } else {
      alert('FAIL');
    }
  }

  deleteGame = async(id) => {
    if (!window.confirm('Are you sure you want to delete this game?')) {
      return;
    }

    let URL =  `http://localhost:5000/api/game/delete/${id}`;
    let response = await fetch(URL)

    let data = await response.json()

    if(data.Success) {
      alert("Game delete");
    } else {
      alert('Fail');
    }
  }

  render() {
    return(
      <div className="container">
        <GameTable deleteGame={this.deleteGame} addToCart={this.addToCart} games={this.state.games}/>
      </div>
    );
  }
}

export default ShoppingIndex;
