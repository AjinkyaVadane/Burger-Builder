import React from 'react';
import classes from './Toolbar.css'
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle'

const toolBar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle click={props.click} />
            <Logo logoheight="90%" />
            <nav className={classes.DesktopOnly}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>

    );
}

export default toolBar;