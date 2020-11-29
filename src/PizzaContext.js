import React from 'react';

const PizzaContext = React.createContext({
    pizzas: [],
    addPizza: () => { },
    deletePizza: () => { },
})

export default PizzaContext;