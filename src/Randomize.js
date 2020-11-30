import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pizzaIngredients from './images/pizza-ingredients.jpg';
import Ingredients, { IngredientType } from './Ingredients';
import Pizza from './Pizza';

export default function Randomize() {
    const [pizza, setPizza] = useState(null);
    function generateRandomPizza(ingredients = {}) {
        const newPizza = {
            name: ''
        };
        Object.keys(IngredientType).forEach(type => {
            if (!ingredients[type]) {
                const allIngredients = Ingredients[type];
                const random = Math.floor(Math.random() * allIngredients.length);
                newPizza[type] = allIngredients[random];
            } else {
                newPizza[type] = ingredients[type];
            }
        })
        setPizza(newPizza)
    }
    function handleSubmit(e) {
        e.preventDefault();
        const customIngredients = Object.keys(IngredientType).reduce((map, type) => {
            map[type] = e.target[type] ? e.target[type].value : undefined;
            return map;
        }, {})
        generateRandomPizza(customIngredients)
    }
    return (
        <>
            <div>
                <h1>Time to randomize!</h1>
                <img width='50%' src={pizzaIngredients} alt='pizza ingredients' />
            </div>
            <div>Want to save the pizza? Don't forget to <Link to='/SignIn'>sign in!</Link></div>
            <div>
                <h2>Feeling spontaneous?</h2>
                <h3>Let's randomize everything!</h3>
                <button type='button' onClick={() => generateRandomPizza()}>Randomize &#x1F3B2;</button>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Make a few personalizations here:</h3>
                {Object.keys(IngredientType).map((type) => (<div key={type}>
                    <label htmlFor={type}>{type[0].toUpperCase() + type.substr(1)}</label>
                    <input name={type} id={type} placeholder='any' list={`${type}-list`}></input>
                    <datalist key={type} id={`${type}-list`}>
                        {Ingredients[type].map((value, i) => (<option key={i} value={value} />))}
                    </datalist>
                </div>))}
                <button type='submit'>Show me the pizza!</button>
            </form>
            {pizza && <Pizza {...pizza} />}
        </>
    )
}