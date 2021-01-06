import React, { Component } from 'react'

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodCart from './FoodCart.js';
import AddFoodCart from './AddFoodCart.js';


class App extends React.Component {
  state = {
    foodsData: foods
  }

  addFoodCartHandler = (theFoodCart) => {
    let foodsCopy = [...this.state.foodsData];

    foodsCopy.push(theFoodCart);

    this.setState({ foodsData: foodsCopy })
  }

  render() {
    console.log("foods", this.state.foodsData)
    return (
      <div>
        <button>Add</button>
        {
          //if
          <AddFoodCart addTheFoodCart={this.addFoodCartHandler} />
        }
        {

          this.state.foodsData.map(e => {
            return <FoodCart name={e.name} calories={e.calories} image={e.image} quantity={e.quantity} />
          })

        }

      </div>
    );
  }
}

export default App;

