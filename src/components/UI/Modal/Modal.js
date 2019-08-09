import React, { Component } from 'react';
import classes from './Modal.css'
import Aux from '../../../hoc/AuxFolder/Auxiliary'
import BackDrop from '../BackDrop/BackDrop'

class Modal extends Component {

    //We will use a life cycle method so that we can control rendering of Ordersummary component

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    componentWillUpdate() {
        console.log('[Modal.js]willUpdate');
    }

    render() {
        return (
            <Aux>
                <BackDrop show={this.props.show}
                    clicked={this.props.hideOrderSummary} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux >

        )
    }
}

export default Modal;
