import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import PizzaContext from './PizzaContext';
import Rating from './Rating';
import { IngredientType } from './Ingredients';
import UserContext from './UserContext';
import { useHistory } from 'react-router-dom';

function PizzaName({ name, setName }) {
    if (setName) {
        return <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Randomized Pizza'
        />
    }
    return <h3>{name}</h3>
}

export default function Pizza(props) {
    const { user } = useContext(UserContext);
    const history = useHistory();
    const { savePizza, updatePizza } = useContext(PizzaContext);
    const [name, setName] = useState(props.name);
    const [comments, setComments] = useState(props.comments);
    const [rating, setRating] = useState(props.rating);
    const [error, setError] = useState(null);
    const [pendingDelete, setPendingDelete] = useState(false);
    const isSaved = Boolean(props.id);

    function handleSave() {
        if (isSaved) {
            updatePizza(props.id, { comments, rating })
                .catch(() => setError('Unable to save pizza.'))
        } else {
            savePizza({ ...props, name }, () => history.push('/MyPizzas'))
                .catch(() => setError('Unable to save pizza.'))
        }
    }
    // pencil &#x1F589;
    return (
        <div className='pizza'>
            {error && <div className='error'>{error}</div>}
            <PizzaName name={name} setName={!isSaved && setName} /> <br />
            {Object.keys(IngredientType).map((type) => (<div key={type}>
                <span>{type[0].toUpperCase() + type.substr(1)}: </span>
                <span>{props[type]}</span>
            </div>))} <br />
            {isSaved && <>
                <div className='comments'>
                    <label htmlFor='comments'>Comments:</label>
                    <textarea name='comments' id='comments' defaultValue={comments} onChange={e => setComments(e.target.value)} />
                </div>
                <div className='rating'>
                    <label>Rating:</label>
                    <Rating value={rating} onChange={setRating} />
                </div>
            </>} <br />
            <div className='actions'>
                <button
                    type='button'
                    onClick={handleSave}
                    disabled={(isSaved && props.comments === comments && props.rating === rating) || ((!isSaved && !name) || !user)}
                >{isSaved ? 'Save Changes' : 'Save Pizza'}</button>
                {isSaved && <button type='button' onClick={() => pendingDelete ? props.delete(props.id) : setPendingDelete(true)}>{!pendingDelete ? "Delete Pizza" : "Confirm delete"}</button>}
            </div>
        </div>
    )
}

Pizza.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    crust: PropTypes.string.isRequired,
    sauce: PropTypes.string.isRequired,
    cheese: PropTypes.string.isRequired,
    meat: PropTypes.string.isRequired,
    topping: PropTypes.string.isRequired,
    comments: PropTypes.string,
    rating: PropTypes.oneOf(['1', '2', '3', '4', '5']),
    delete: PropTypes.func
}