import React, { Component } from 'react';
import Aux from '../AuxFolder/Aux';
import classes from './Layout.css';
import ToolBar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


class Layout extends Component {
    state = {
        isSideDrawerOpen: true
    }

    SideDrawerHandler = () => {
        // this.setState({
        //     isSideDrawerOpen: !this.state.isSideDrawerOpen
        // })

        this.setState((prevState) => {
            return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
        });
    }


    render() {
        console.log(this.state.isSideDrawerOpen, 'isSideDrawerOpen');
        return (
            <Aux>
                <ToolBar click={this.SideDrawerHandler} />
                <SideDrawer sideDrawerOpen={this.state.isSideDrawerOpen} sideDrawerclick={this.SideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>

        );
    }
}

export default Layout;