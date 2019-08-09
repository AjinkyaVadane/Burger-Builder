import React, { Component } from 'react';
import Aux from '../../../hoc/AuxFolder/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary.js] willUpdate');
    }

    render() {
        let orderSummaryList = Object.keys(this.props.ingredientList).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>  {igKey} </span>:  {this.props.ingredientList[igKey]}
                </li>
            )
        });
        let totalPrice = <p style={{ float: 'right' }}><strong> TOTAL PRICE : {this.props.totalPrice.toFixed(2)} $</strong></p>
        return (
            <Aux>
                <p>Your Order</p>
                <p>A delicious burger with following Ingrdients:</p>
                {orderSummaryList}
                {totalPrice}

                <p>Continue to Checkout ?</p>

                <Button btnType="Danger" clicked={this.props.clickedClose}> CANCEL </Button>
                <Button btnType="Success" clicked={this.props.clickedContinue}> CONTINUE </Button>
            </Aux >
        );
    }
}

export default OrderSummary;