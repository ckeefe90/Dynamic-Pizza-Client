import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import cartoonPizza from './images/cartoon-pizza.png';
import './index.css';

export default function Header(props) {
    const userContext = useContext(UserContext)

    return (
        <header>
            <nav>
                <div className='leftNav'>
                    <Link to='/'>
                        <img src={cartoonPizza} alt='cartoon pizza' className='logo
                    '/>
                    </Link>
                    <Link to='/'>
                        Dynamic Pizza
                    </Link>
                </div>
                <div>
                    {userContext.user && <Link to='/MyPizzas'>My Pizzas</Link>}
                </div>
                <div className='rightNav'>
                    {userContext.user && <Link to='/' onClick={userContext.logOut}>Log Out</Link>}
                    {!userContext.user && <>
                        <Link to='/SignUp'>Sign Up</Link>
                        <Link to='/SignIn'>Sign In</Link>
                    </>}
                    <a href='/Randomize'>Randomize</a>
                </div>
            </nav>
        </header>
    )
}