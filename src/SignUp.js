import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from './UserContext';
import cheesyPizza from './images/cheesy-pizza.jpg';
import pizzaOven from './images/pizza-oven.jpg';

export default function SignUp() {
    const userContext = useContext(UserContext);
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState();

    function handleSubmit(e) {
        e.preventDefault()
        const { email, password, confirmPassword } = e.target
        if (password.value !== confirmPassword.value) {
            setError(new Error('Passwords do not match'))
            return
        }
        const user = { email: email.value, password: password.value }
        userContext.addUser(user, () => history.push('/MyPizzas'))
            .catch(setError)
    }

    return (<>
        <div className='SignUp'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Create an account<br />
                    to save your pizzas</h3>
                    {error && <>
                        <h4>Oops! Something went up in flames.</h4>
                        <img width='20%' src={pizzaOven} alt='pizza oven' />
                        <h4>{error.message}</h4>
                    </>}
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input name='email' id='email' required />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input name='password' id='password' type='password' required />
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                    <input name='confirmPassword' id='confirmPassword' type='password' required />
                </div>
                <button type='submit'>Sign-up!</button>
                <p>Already have an account? <Link to='/SignIn'>Sign in</Link></p>
            </form>
            <img width='50%' src={cheesyPizza} alt='cheesy pizza' />
        </div>
    </>)
}