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

  render() {
    return(
      <div className="container">
        <GameTable games={this.state.games}/>
      </div>
    );
  }
}

export default ShoppingIndex;
