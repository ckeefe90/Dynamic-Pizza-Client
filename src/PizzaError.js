import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pizzaFlames from './images/pizza-flames.jpg';


export default class PizzaError extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <>
                <h2>Uh, oh. Something went up in flames.</h2>
                <img src={pizzaFlames} alt='pizza flames' />
            </>
        }
        return this.props.children;
    }
}

PizzaError.propTypes = { children: PropTypes.node.isRequired }