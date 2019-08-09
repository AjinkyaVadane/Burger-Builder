import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
    //SuperImportant
    let transofrmedIngrdients = [];
    let ingredientsArray = Object.keys(props.ingredients)
        .map(igkey => {
            //console.log(igkey, 'igkey')
            //Now i want to transform this string of keys into an array etc if cheese :2 then i need 2 cheese array
            //return[...Array(props.ingredients[igkey])] .. This will give me 2 for cheese it will retunr empty array ( , ) with 2 location  
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                //console.log(i, 'i');
                return <BurgerIngredient key={igkey + i} type={igkey} />

            });
        });

    ingredientsArray.map(transIngredient => {
        transIngredient.map(ingredientIndividual => {
            transofrmedIngrdients.push(ingredientIndividual)
        });
    });
    //check for Please start adding ingredients!
    if (transofrmedIngrdients.length === 0) {
        transofrmedIngrdients = <p>Please start adding ingredients!</p>
    }


    console.log(transofrmedIngrdients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transofrmedIngrdients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;