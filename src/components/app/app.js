/* Core */
import React, { Component } from 'react';
/* Component */
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import AppBody from '../app-body';

/* Style */
import './app.scss';

export default class App extends Component {
    render() {
        return (
            <div className="main-app">
                <AppHeader />
                <AppBody />
                <AppFooter copyright="This is footer copyright" />
            </div> 
        );
    }
}