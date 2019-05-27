import React, { Component } from 'react';
import './index.css';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      "cart": [],
      "numOfGames": 0,
      "total": 0
    }
  }

  checkout = async() => {
    let cart = this.state.cart;
    let URL = 'http://localhost:5000/api/cart/checkout';
    for(let i = 0; i < cart.length; i++) {
      let response = await fetch(URL, {
        headers: {
          'Content-Type': 'application/json',
          'id': cart[i].id
        }
      });

      let message = await response.json();
      if(message.Success) {
        cart.shift()
      }
      console.log(i);
    }
    this.setState({ "cart" : cart })
    alert("Thank you for your purchase");
  }

  componentWillMount = async() => {

    let URL = "http://localhost:5000/api/cart";
    let response = await fetch(URL);

    let cart = [];
    let price = 0;
    let count = 0;

    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
      let gameURL = "http://localhost:5000/api/game?id=" + data[i].game_id;
      let gameResponse = await fetch(gameURL);
      let game = await gameResponse.json();

      price += game.price;
      count += 1;
      cart.push({"id": data[i].id});
    }

    this.setState({'total': price, 'numOfGames': count, "cart": cart });
  }

  render() {
    if(this.state.numOfGames > 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>({this.state.numOfGames}xGames) ${this.state.total}</h1>
            </div>
            <div className="col-md-6">
              <button onClick={() => this.checkout()} className="btn btn-primary">Checkout</button>
            </div>
          </div>
      </div>);
    } else {
      return (
        <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>No Games To Checkout</h1>
          </div>
        </div>
        </div>
      );
    }
  }
}

export default Checkout;
