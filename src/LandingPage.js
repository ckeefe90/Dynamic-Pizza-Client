import React from 'react';
import { Link } from 'react-router-dom';
import pizzas from './images/pizzas.jpg';
import iLovePizza from './images/pizza-i-love-u.jpg';
import mainPizza from './images/main-pizza.jpg';
import pizzaCalzone from './images/pizza-calzone.jpg';
import cartoonPizza from './images/cartoon-pizza.png';

export default function LandingPage(props) {
    return (<>
        <section>
            <h2>Dynamic Pizza Generator</h2>
            <h3>If you like trying new things then you came to the right place!</h3>
        </section>
        <section>
            <div className='description'>
                <h3>Make a spontaneous pizza order!</h3>
                <img src={pizzas} alt='pizzas' />
                <p>Tired of ordering the same pizza? <br />
            Try this pizza randomizer to get some new ideas!</p>
            </div>
        </section>
        <section>
            <div className='description'>
                <h3>Save pizzas that you want to try!</h3>
                <img src={iLovePizza} alt='I love pizza' />
                <p>Roll the dice for a completely random pizza. <br />
            Make a few personalizations. <br />
            Save the pizza if it sounds appetizing. <br />
            Come back when you're about to place an order.</p>
            </div>
        </section>
        <section>
            <div className='description'>
                <h3>Rate the pizzas that you've tried!</h3>
                <img src={mainPizza} alt='main pizza' />
                <p>Keep track of pizzas that you've tried. <br />
            Re-order the ones that were good.<br />
            Avoid ones that did NOT hit the spot.</p>
            </div>
        </section>
        <section>
            <div className='description'>
                <Link to='/Randomize'>
                    <img src={cartoonPizza} alt='cartoon pizza' className='logo
                    ' /><br />
                    &#x1F3B2; Time to randomize! &#x1F3B2;</Link> <br />
                <img src={pizzaCalzone} alt='pizza calzone' />
            </div>
        </section>
    </>)
}