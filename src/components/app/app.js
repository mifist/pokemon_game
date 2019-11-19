/* Core */
import React, { Component } from 'react';
/* Component */
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import AppBody from '../app-body';

/* Style */
import './app.scss';

export default class App extends Component {
    state = { 
        pokemons: []
    }

    getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=386", {
            method: "GET"
        }).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    // console.log(json.results[385].name);
                    // console.log(json)
                    this.setState({
                        pokemons: json.results
                    });
                });
            } else {
                this.setState({
                    pokemons: response.status
                });
            }
        });
    
    };

    componentDidMount() {
        this.getPokemon()
    }

    render() {
        const { pokemons } = this.state
        return (
            <div className="main-app">
                <AppHeader />
                <AppBody getPokemons={ pokemons } />
                <AppFooter copyright="This is footer copyright" />
            </div> 
        );
    }
}