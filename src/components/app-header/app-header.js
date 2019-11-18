/* Core */
import React from 'react';
/* Style */
import './app-header.scss';

const AppHeader = () => {
    const isLoggedIn = true;
    const loginMsg = <span>Login in this App please.</span>; /* React element */
    const welcomeMsg = <span>Welcome Back to this App.</span>;
    return (
        <header className="app-header">
            { isLoggedIn ? welcomeMsg : loginMsg }
            <br />
            <span>Current Time: { (new Date()).toString() }</span>
            <div className="list-header">
                <h1>Pokemons</h1>
            </div>
            
        </header>
    );
};

export default AppHeader;