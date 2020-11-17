import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

export default function Header(props) {
    const userContext = useContext(UserContext)

    return (
        <header>
            <nav>
                <div className='leftNav'>
                    <Link to='/'>
                        <p>[<em>Placeholder for pizza icon</em>]</p>
                        Dynamic Pizza Generator
                    </Link>
                    {userContext.user && <Link to='/MyPizzas'>My Pizzas</Link>}
                </div>
                <div className='rightNav'>
                    {userContext.user && <Link onClick={userContext.logOut}>Log Out</Link>}
                    {!userContext.user && <>
                        <Link to='/SignUp'>Sign Up</Link>
                        <Link to='/SignIn'>Sign In</Link>
                        <a href='/Randomize'>Randomize</a>
                    </>}
                </div>
            </nav>
        </header>
    )
}