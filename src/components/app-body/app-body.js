/* Core */
import React, { Component } from 'react';
/* Style */
import './app-body.scss';

export default class AppBody extends Component {
    state = {  }

    renderPokemons = (pokemons) => {
        //console.log(pokemons)
        pokemons.map( (item, index) => {
            const { name, url } = item
            console.log(item)
            return (
                <div key={ index } className="pokemon-single-container">
                    <img className="sprite" src={ url } alt={ name } />
                    <span className="align-bottom">{ name }</span>
                </div>
            );
        } );
        
    }

    render() {
        const { getPokemons } = this.props;
        return (
            <main className="app-body">
                <div className="pokemon-container">
                    { this.renderPokemons(getPokemons) }
                </div>
            </main> 
        );
    }
}