import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from './UserContext';
import pizzaSlice from './images/pizza-slice.jpg'

export default function SignIn(props) {
    const userContext = useContext(UserContext)
    const history = useHistory()
    const [error, setError] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        const { email, password } = e.target
        const user = { email: email.value, password: password.value }
        userContext.setUser(user, () => history.push('/MyPizzaList'))
            .catch(setError)
    }

    return (<>
        <div className='SignIn'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Please sign in:</h2>
                    {error && <>
                        <h3>Oops! Username and password do not match.</h3>
                        <h4>{error.message}</h4>
                    </>}
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input name='email' required />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input name='password' type='password' required />
                </div>
                <button type='submit'>Login</button>
                <p>Don't have an account? <Link to='/SignUp'>Sign up</Link></p>
            </form>
        </div>
        <div className='SignInImage'>
            <img width='50%' src={pizzaSlice} alt='pizza slice' />
        </div>
    </>)
}