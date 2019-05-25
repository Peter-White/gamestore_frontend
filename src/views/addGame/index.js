import React, { Component } from 'react';
import './index.css';
import GameForm from '../../components/gameForm';

class AddGame extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Add a Game</h1>
          <GameForm />
        </div>
      </div>
    );
  }
}

export default AddGame;
