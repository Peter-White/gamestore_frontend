import React, { Component } from 'react';
import './index.css';

class GameTable extends Component {
  constructor() {
    super();
    this.state = {
      "count": 0
    }
  }

  render() {
    return (
      <table className="table">
        <thead>

        </thead>
        <tbody>
          {
            this.props.games[0] &&
            this.props.games.map( game => {
              if(game.quantity > 0 || game.quantity == null)
                return <tr key={game.id}>
                  <td><img src={game.imageURL} height="200"/></td>
                  <td><a href={game.descriptionURL}>{ game.title }</a></td>
                  <td>${game.price}</td>
                  <td>{game.rating}</td>
                  <td>{game.type}</td>
                  <td>{game.genre}</td>
                  <td><button className="btn btn-primary">Add To Cart</button></td>
                  <td><button className="btn btn-danger">Edit Game</button></td>
                </tr>
            }
            )
          }
        </tbody>
      </table>
    );
  }
}

export default GameTable;
