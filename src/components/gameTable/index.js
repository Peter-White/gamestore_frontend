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
              if(game.quantity > 0)
                return <tr key={game.id}>
                  <td><img src={game.imageURL} height="200"/></td>
                  <td><a href={game.descriptionURL}>{ game.title }</a></td>
                  <td>${game.price}</td>
                  <td>{game.rating}</td>
                  <td>{game.type}</td>
                  <td>{game.genre}</td>
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
