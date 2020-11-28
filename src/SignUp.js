import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from './UserContext';
import cheesyPizza from './images/cheesy-pizza.jpg'

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
        userContext.addUser(user, () => history.push('/MyPizzaList'))
            .catch(setError)
    }

    return (<>
        <div className='SignUp'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Create an account so you can track your pizzas</h3>
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