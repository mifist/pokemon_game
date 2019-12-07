/* Core */
import React, { Component } from 'react'
/* Style */
import './pokemons-list.scss';
/* Services */
import PokemonService from '../../../services/pokemon-service';
/* Component */
import PokemonCard from '../pokemon-card';
import PokemonModal from '../pokemon-modal';


export default class PokemonsList extends Component {

    pokemonService = new PokemonService()

    state = { 
        error: false,
        loading: false,
        isPokemonModalOpen: false
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
                            onPokemonSelected={ () => this.onPokemonSelected(item.name) } 
                            />
                    </div>
                );
            } )
        }
    }

    // Events
    onPokemonSelected = ( name ) => {
        this.onChangeModalState()
        this.pokemonService
        .getPokemon(name)
        .then(( pokemon ) => {
            this.setState({
                selectedPokemon: pokemon
            }) 
        })
        .catch(this.onError)
    }

    onChangeModalState = () => {
        this.setState((state) => {
            return {
                isPokemonModalOpen: !state.isPokemonModalOpen
            }
        })
    }


    render() {
        const { pokemons } = this.props
        const { isPokemonModalOpen, selectedPokemon } = this.state
        const modal = isPokemonModalOpen ? 
                <PokemonModal 
                    isOpen={ isPokemonModalOpen } 
                    showPokemon={ selectedPokemon } 
                    onChangeModal={ this.onChangeModalState }
                /> : null

        return (
            <div className="pokemons-list pokemon-container">
                { this.getAllPokemos(pokemons) }
                { modal }
            </div> 
        );
    }
}
