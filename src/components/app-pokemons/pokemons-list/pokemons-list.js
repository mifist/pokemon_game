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
        isPokemonModalOpen: false,
        isTooltipShow: false,
        pokemonAbilitiesInfo: []
    }

    // Handlers
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    getAllPokemos( pokemons ) {
        if ( pokemons ) {
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


    onPokemonInfo = ( pokemon ) => {
        if( pokemon ) {
            console.log({pokemon})
            const { abilities } = pokemon
            return abilities.map( item => {
                    this.pokemonService
                    .getPokemonAbility(item.ability.name)
                    .then(ability => {
                        this.setState((previous) => {
                            return {
                                pokemonAbilitiesInfo: [...previous.pokemonAbilitiesInfo, ability]
                            }
                        })
                    })
                    .catch(this.onError)
            } )
        }
    }

    // Events
    onPokemonSelected = ( name ) => {
        this.onChangeModalState()
        this.pokemonService
        .getPokemon(name)
        .then(( pokemon ) => {
            this.onPokemonInfo(pokemon)
            this.setState((previous) => {
                return {
                    selectedPokemon: pokemon
                }
            })
        } )
        .catch(this.onError)
    }

    onChangeModalState = () => {
        this.setState((state) => {
            return {
                isPokemonModalOpen: !state.isPokemonModalOpen
            }
        })
    }
    onChangeTooltipState = () => {
        this.setState((state) => {
            return {
                isTooltipShow: !state.isTooltipShow
            }
        })
    }

    render() {
        const { pokemons } = this.props
        const { isPokemonModalOpen, selectedPokemon, pokemonAbilitiesInfo } = this.state

        const pokemonsList = this.getAllPokemos(pokemons)

        return (
            <div className="pokemons-list pokemon-container">
                { pokemonsList }
                { isPokemonModalOpen && <PokemonModal 
                    isOpen={ isPokemonModalOpen } 
                    showPokemon={ selectedPokemon } 
                    pokemonAbilities={ pokemonAbilitiesInfo }
                    onChangeModal={ this.onChangeModalState }
                    onChangeTooltip={ this.onChangeTooltipState }
                /> }
            </div> 
        );
    }
}
