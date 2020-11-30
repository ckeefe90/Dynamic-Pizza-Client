export const IngredientType = Object.freeze({
    crust: 'crust',
    sauce: 'sauce',
    cheese: 'cheese',
    meat: 'meat',
    topping: 'topping'
});

const Ingredients = Object.freeze({
    [IngredientType.crust]: [
        'Hand Tossed',
        'Deep Dish',
        'Gluten Free',
        'Stuffed Crust',
        'Thin Crust'
    ],
    [IngredientType.sauce]: [
        'Marinara',
        'Alfredo',
        'Garlic Ranch',
        'Pesto',
        'Buffalo',
        'Olive Oil',
        'Barbecue'
    ],
    [IngredientType.cheese]: [
        'Mozzarella',
        'Parmesan',
        'Feta',
        'Goat cheese',
        'Cheddar',
        'Ricotta',
        'Provolone'
    ],
    [IngredientType.meat]: [
        'None',
        'Bacon',
        'Pepperoni',
        'Ham',
        'Chicken',
        'Sausage',
        'Meatball',
        'Ground Beef',
        'Prosciutto',
        'Salami'
    ],
    [IngredientType.topping]: [
        'None',
        'Spinach',
        'Artichoke',
        'Green Pepper',
        'Red Onion',
        'Olives',
        'Cherry Tomatoes',
        'Onion',
        'Jalapeños',
        'Extra Cheese'
    ]
});

export default Ingredients;