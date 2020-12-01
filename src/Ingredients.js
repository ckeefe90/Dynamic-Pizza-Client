export const IngredientType = Object.freeze({
    crust: 'crust',
    sauce: 'sauce',
    cheese: 'cheese',
    meat: 'meat',
    veggie: 'veggie'
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
        'None',
        'Lactose Free',
        'Mozzarella',
        'Parmesan',
        'Feta',
        'Goat cheese',
        'Cheddar',
        'Ricotta',
        'Provolone',
        'Extra Cheese'
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
    [IngredientType.veggie]: [
        'None',
        'Spinach',
        'Artichoke',
        'Green Pepper',
        'Red Onion',
        'Olives',
        'Cherry Tomatoes',
        'Onion',
        'Jalapeños',
        'Banana Peppers'
    ]
});

export default Ingredients;