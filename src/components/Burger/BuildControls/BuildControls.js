import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price : <strong>{props.totalPrice.toFixed(2)} </strong> $</p>

            {controls.map(
                ctrl => <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    add={() => props.addIngredient(ctrl.type)}
                    remove={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
                // add={props.addIngredient.bind(this, ctrl.type)} /> //You can make use of either technique
            )}
            <button className={classes.OrderButton} disabled={props.orderNowEnable}
                onClick={props.showOrderSummary}> ORDER NOW </button>
        </div>
    );
}

export default buildControls;