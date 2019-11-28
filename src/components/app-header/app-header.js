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
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <span className="navbar-brand">Pokemons</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <span className="nav-link" href="#">Home</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" href="#">Features</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" href="#">Pricing</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" href="#">About</span>
                    </li>
                    </ul>
                
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        { isLoggedIn ? welcomeMsg : loginMsg }
                    </div>
                </div>
            </div>
            

        </header>
    );
};

export default AppHeader;