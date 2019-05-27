import React, { Component } from 'react';
import './index.css';
import CartTable from '../../components/cartTable';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      "cart": [],
      "total": 0
    }
  }

  componentWillMount = async() => {

    let URL = "http://localhost:5000/api/cart";
    let response = await fetch(URL);

    let cart = [];
    let price = 0;

    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
      let gameURL = "http://localhost:5000/api/game?id=" + data[i].game_id;
      let gameResponse = await fetch(gameURL);

      let game = await gameResponse.json();

      price += game.price;

      cart.push({"id": data[i].id, "quantity": data[i].quantity, "price": game.price, "game_id": data[i].game_id, "title": game.title});
    }

    this.setState({ 'cart' : cart, 'total': price });
  }

  removeFromCart = async(id) => {
    let URL = `http://localhost:5000/api/cart/remove`;
    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'id': id
      }
    });

    let data = await response.json();

    if(data.Success) {
      let cart = this.state.cart;
      let total = this.state.total;

      for (let i in cart) {
        if (cart[i].id === id) {
          var game = cart.splice(i, 1);
          total -= game[0].price;
          break;
        }
      }

      this.setState({ cart, "total": total.toFixed(2) });
    } else {
      alert('FAIL');
    }

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9 offset-md-1">
            <h1>Cart</h1>
            <CartTable removeFromCart={this.removeFromCart} cart={this.state.cart} total={this.state.total} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
