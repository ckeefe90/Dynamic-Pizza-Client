import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage(props) {
    return (<>
        <h1>Dynamic Pizza Generator</h1>
        <h2>If you like trying new things then you came to the right place!</h2>
        <section>
            <h3>Make a spontaneous pizza order!</h3>
            <p>[<em>placeholder for screenshot of pizza</em>]</p>
            <p>Tired of ordering the same pizza? Try out this pizza randomizer to get some new ideas!</p>
        </section>
        <section>
            <h3>Save pizzas that you want to try!</h3>
            <p>[<em>placeholder for screenshot of pizza</em>]</p>
            <p>Not looking to order pizza right now but still want to roll the dice? That's totally fine! Save the pizza if it sounds appetizing and come back when you're about to place an order.</p>
        </section>
        <section>
            <h3>Rate the pizzas that you've tried!</h3>
            <p>[<em>placeholder for screenshot of pizza</em>]</p>
            <p>Keep track of pizzas that you've tried. That way you can re-order the ones that were good and also remember which ones did NOT hit the spot.</p>
        </section>
        <section>
            <Link to='/Randomize'>Time to randomize!</Link>
            <button type='button'>Randomize</button>
            <p>[<em>Placeholder for screenshot of pizza</em>]</p>
        </section>
    </>)
}