import React, { Component } from 'react';
import './index.css';

class GameForm extends Component {
  saveGame = async(e) => {
    e.preventDefault();

    let title = e.target.elements.title.value;
    let descriptionURL = e.target.elements.descriptionURL.value;
    let price = e.target.elements.price.value;
    let imageURL = e.target.elements.imageURL.value;
    let rating = e.target.elements.rating.value;
    let type = e.target.elements.type.value;
    let genre = e.target.elements.genre.value;
    let quantity = e.target.elements.quantity.value;

    let URL = "http://localhost:5000/api/game/save";

    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        "title" : title,
        "descriptionURL" : descriptionURL,
        "price" : price,
        "imageURL" : imageURL,
        "rating" : rating,
        "type" : type,
        "genre" : genre,
        "quantity" : quantity
      }
    });

    let data = await response.json();

    console.log(data);

    if (data.Success) {
      alert(`${title} has been saved`);
    } else {
      alert(`Could not save game.`);
    }
  }

  render() {
    return (
      <form onSubmit={this.saveGame}>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" className="form-control" placeholder="Enter Title..." name="title" required />
        </div>

        <div className="form-group">
          <label htmlFor="descriptionURL">Wikipedia:</label>
          <input type="text" className="form-control" placeholder="Enter Wikipedia Article URL..." name="descriptionURL" required />
        </div>

        <div className="form-group">
          <label htmlFor="imageURL">Image URL:</label>
          <input type="text" className="form-control" placeholder="Enter Cover Image URL..." name="imageURL" required />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" step="0.01" className="form-control" placeholder="Enter Price..." name="price" required />
        </div>


        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select className="form-control" name="rating">
            <option>NR</option>
            <option>E</option>
            <option>E10</option>
            <option>T</option>
            <option>M</option>
            <option>AO</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select className="form-control" name="type">
            <option>Single-Player</option>
            <option>MultiPlayer</option>
            <option>Single-Player / MultiPlayer</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input type="text" className="form-control" placeholder="Enter Genre..." name="genre" required />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quanity:</label>
          <input type="number" className="form-control" placeholder="Enter Quanity..." name="quantity" />
        </div>

        <button type="submit" className="btn btn-primary">Save Game</button>
      </form>
    );
  }
}

export default GameForm;
