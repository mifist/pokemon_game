/* Core */
import React from 'react';
/* Style */
import './app-footer.scss';

const AppFooter = ( { copyright } ) => {
    return (
        <footer className="app-footer">
            <p className="copyright">{ copyright }</p>
            <span>Current Time: { (new Date()).toString() }</span>
        </footer>
    );
}

export default AppFooter;