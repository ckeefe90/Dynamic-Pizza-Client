import React, { useContext } from 'react';
import PizzaContext from './PizzaContext';
import assortedPizza from './images/assorted-pizzas.jpg';
import pizzaHeart from './images/pizza-heart.jpg';
import Pizza from './Pizza';

export default function MyPizzaList() {
    const pizzaContext = useContext(PizzaContext)

    function handleDeletePizza(pizzaId) {
        pizzaContext.deletePizza(pizzaId)
    }

    return (<>
        <h2>My Pizza List</h2>
        {/* <img width='30%' src={assortedPizza} alt='assorted pizza' /> */}
        <section id='myPizzas'>
            {pizzaContext.pizzas.map(pizza =>
                <Pizza
                    {...pizza}
                    key={pizza.id}
                    delete={handleDeletePizza}
                />
            )}
        </section>
        {/* <img width='40%' src={pizzaHeart} alt='pizza heart' /> */}
    </>)
}