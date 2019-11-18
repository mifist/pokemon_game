/* Core */
import React, { Component } from 'react';
/* Style */
import './app-body.scss';

export default class AppBody extends Component {
    state = {  }

    renderPokemons = () => {
        const { getPokemons } = this.props;
        console.log(getPokemons)
    }

    render() {
     
        return (
            <main className="app-body">
                { this.renderPokemons }
            </main> 
        );
    }
}