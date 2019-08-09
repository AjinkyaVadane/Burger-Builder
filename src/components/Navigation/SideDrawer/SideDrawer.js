import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/AuxFolder/Auxiliary'
import BackDrop from '../../UI/BackDrop/BackDrop';


const sideDrawer = (props) => {
    //...
    let addedClasses = [classes.SideDrawer, classes.Close];
    if (props.sideDrawerOpen) {
        addedClasses = [classes.SideDrawer, classes.Open];
    }
    console.log('addedClasses', addedClasses);
    return (
        <Aux>
            <BackDrop show={props.sideDrawerOpen} clicked={props.sideDrawerclick} />
            <div className={addedClasses.join(' ')}>
                <Logo logoheight="10%"></Logo>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>

    );
}
export default sideDrawer;