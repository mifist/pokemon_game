/* Core */
import React, {Component} from 'react'
/* Style */
import './pokemons-list.scss';
/* Component */
//import PokemonCard from '../pokemon-card';


export default class PokemonsList extends Component {

    getPokemons = (pokemonsArray) => {
        return pokemonsArray.map( item => {
            const { sprites, name } = item
            console.log(sprites)
            return (
                <div key={ name } className="pokemon-single-container">
                    {/*  <PokemonCard { ...item } /> */}
                    <img className="sprite" src={sprites.front_default} alt={ name } />
                    <span className="align-bottom">{ name }</span>
                </div>
            );
        } );
    }

    render() {
        const { pokemons } = this.props
        console.log(pokemons)
        return (
            <div className="pokemons-list pokemon-container">
                { this.getPokemons(pokemons) }
            </div> 
        );
    }
}

