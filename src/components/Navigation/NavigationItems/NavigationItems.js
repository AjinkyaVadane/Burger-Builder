import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/"
                active={true}
            > Burger Builder </NavigationItem>
            <NavigationItem link="/"
                active={false}
            > Home </NavigationItem>
        </ul>

    );
}

export default navigationItems;