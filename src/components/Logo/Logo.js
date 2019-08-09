import React from 'react';
import classes from './Logo.css';
import Logo from '../../assets/BurgerLogo/burger-logo.png';
const logo = (props) => {
    return (

        <div className={classes.Logo} style={{ height: props.logoheight }} >
            <img src={Logo} />
        </div >

    );
}

export default logo;