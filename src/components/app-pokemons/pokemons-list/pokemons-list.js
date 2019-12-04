/* Core */
import React, { Component } from 'react'
/* Style */
import './pokemons-list.scss';
/* Services */
import PokemonService from '../../../services/pokemon-service';
/* Component */
import PokemonCard from '../pokemon-card';


export default class PokemonsList extends Component {

    pokemonService = new PokemonService()

    state = { 
        error: false,
        loading: false,
        selectedPokemon: ''
    }

    // Handlers
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    getAllPokemos = ( pokemons ) => {
        if (pokemons) {
            // count, next, previous
            const { results } = pokemons
            return results.map( (item, key) => {
                const { ...itemProps } = item
                return (
                    <div key={ item.name } className="pokemon-item" >
                        <PokemonCard { ...itemProps } pokemonKey={ key+1 }
                            onPokemonSelected={ () => this.onPokemonSelected(item.name) } />
                    </div>
                );
            } )
        }
    }

    // Events
    onPokemonSelected = ( name ) => {
        console.log(name)
        this.setState(({ name }) => {
            return {
                selectedPokemon: name
            }
        })
    }


    render() {
        const { pokemons } = this.props
        return (
            <div className="pokemons-list pokemon-container">
                { this.getAllPokemos(pokemons) }
            </div> 
        );
    }
}
