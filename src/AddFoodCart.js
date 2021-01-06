import React, { Component } from 'react';

class AddFoodCart extends Component {

    state = {

        name: '',
        calories: 0,
        image: '',
        quantity: 0
    }

    handleNameInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCaloriesInput = (event) => {
        this.setState({
            calories: event.target.value
        })
    }

    handleImageAdd = (event) => {
        this.setState({
            image: event.target.value
        })
    }

    handleQuantityInput = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        // Call the parent passed function
        this.props.addTheFoodCart(this.state);

        // Reset
        this.setState({

            name: '',
            calories: 0,
            image: '',
            quantity: 0

        })
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)} />

                    <label>Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} />

                    <label>Image:</label>
                    <input type="text" name="image" checked={this.state.image} onChange={(e) => this.handleImageAdd(e)} />

                    <label>Quantity:</label>
                    <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleQuantityInput(e)} />

                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default AddFoodCart;