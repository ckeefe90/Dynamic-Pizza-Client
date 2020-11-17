import React from 'react';

export default function Randomize() {
    return (
        <>
            <div>
                <h1>Let's get started!</h1>
            </div>
            <div>
                <h2>Feeling spontaneous?</h2>
                <h3>Let's randomize everything!</h3>
                <button type='button'>Randomize</button>
            </div>
            <section>
                <h3>Make a few selections here:</h3>
                <div>
                    <label for="crust-type">Crust Type</label>
                    <input placeholder='any' type="dropdown" name='crust-type' id='crust-type' />
                </div>
                <div>
                    <label for="sauce">Sauce</label>
                    <input type="select" name='sauce' id='sauce' placeholder='any' />
                </div>
                <div>
                    <label for="cheese">Cheese</label>
                    <input type="select" name='cheese' id='cheese' placeholder='any' />
                </div>
                <div>
                    <label for="meat">Meat</label>
                    <input type="select" name='meat' id='meat' placeholder='any' />
                </div>
                <div>
                    <label for="toppings">Toppings</label>
                    <input type="select" name='toppings' id='topping' placeholder='any' />
                </div>
                <button type='submit'>Show me the pizza!</button>
            </section>
            <section>
                <header>
                    <h3>Randomized Pizza</h3>
                </header>
                <p>[<em>placeholder for crust type</em>]</p>
                <p>[<em>placeholder for sauce</em>]</p>
                <p>[<em>placeholder for meat</em>]</p>
                <p>[<em>placeholder to topping</em>]</p>
                <button type='button'>Save it</button>
            </section>
        </>
    )
}