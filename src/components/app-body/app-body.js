/* Core */
import React, {Component} from 'react';
/* Style */
import './app-body.scss';

/* Component */
import PokemonsList from '../app-pokemons/pokemons-list';


export default class AppBody extends Component {
    state = { 
        pokemonsDatas: []  
    }

    getPokemonsData = ( item ) => {
        fetch(item.url, {method: "GET"} )
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                    this.setState(( { pokemonsDatas })  => {
                        return {
                            pokemonsDatas: [...pokemonsDatas, json]
                        }
                    });
                });
            }
        });
    }

    getPokemons = ( limit ) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`, {method: "GET"} )
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                    json.results.map( item => this.getPokemonsData(item) )
                });
            } 
        });
    };


    // called just before component rendering | Component Life Cycle
    UNSAFE_componentWillMount() {  console.log("componentWillMount()"); }

    // called after component rendering. Here you can query for remote resources | Component Life Cycle
    componentDidMount() {
        console.log("componentDidMount()")
        this.getPokemons(20)
    }

    render() {
        const { pokemonsDatas } = this.state
        return (
            <main className="app-body">
                <PokemonsList pokemons={ pokemonsDatas }/>
            </main>  
        );
    }
}