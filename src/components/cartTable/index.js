import React, { Component } from 'react';
import './index.css';

class CartTable extends Component {

  render() {
    return (
      <table className="table">
        <thead>
        </thead>
        <tbody>
        {
          this.props.cart[0] &&
          this.props.cart.map(game =>
            <tr key={game.id}>
              <td>{game.title}</td>
              <td>${game.price}</td>
              <td><button onClick={() => this.props.removeFromCart(game.id)} className="btn btn-danger">Remove</button></td>
            </tr>
          )
        }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total: {this.props.total}</td>
            <td><button className="btn btn-primary">Checkout</button></td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default CartTable;
