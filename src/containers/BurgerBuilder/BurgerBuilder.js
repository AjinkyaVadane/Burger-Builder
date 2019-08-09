import React, { Component } from 'react';
import Aux from '../../hoc/AuxFolder/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


//global declaration
const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    meat: 1.3,
    cheese: 0.4
}

const BURGER_ORIGINAL_PRICE = 0.4;

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0.4,
        orderNow: false,
        purchasing: false
    }

    orderNowEnable(updatedTotalPrice) {
        updatedTotalPrice = updatedTotalPrice.toFixed(2);
        console.log(updatedTotalPrice)
        this.setState({
            orderNow: updatedTotalPrice > 0.4
        });

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldTotalPrice = this.state.totalPrice;
        let updatedTotalPrice = oldTotalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedTotalPrice
        })
        this.orderNowEnable(updatedTotalPrice);

    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let updatedCount = 0;
        if (oldCount > 1) {
            updatedCount = oldCount - 1;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldTotalPrice = this.state.totalPrice;
        let updatedTotalPrice = oldTotalPrice;
        if (oldTotalPrice >= BURGER_ORIGINAL_PRICE) {
            updatedTotalPrice = oldTotalPrice - INGREDIENT_PRICES[type];

        }
        if (updatedTotalPrice >= 0.4) {
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: updatedTotalPrice
            });
        }
        this.orderNowEnable(updatedTotalPrice);

    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    closePurchaseHandler = () => {
        this.setState({
            purchasing: false
        });
    }
    continuePurchaseHandler = () => {
        alert("You click Continue!");
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    hideOrderSummary={this.closePurchaseHandler}>
                    <OrderSummary ingredientList={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        clickedClose={this.closePurchaseHandler}
                        clickedContinue={this.continuePurchaseHandler} />
                </Modal>

                <Burger ingredients={this.state.ingredients} />
                <BuildControls addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    orderNowEnable={!this.state.orderNow}
                    showOrderSummary={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;