/* Core */
import React from 'react'
/* Style */
import './pokemons-list.scss';
/* Component */
import PokemonCard from '../pokemon-card';

const PokemonsList = ( { pokemons } ) => {
    const pokemonDatas = pokemons.map( item => {
        const { ...itemProps } = item
        return (
            <div key={ item.name } className="pokemon-item">
                <PokemonCard { ...itemProps }  />
            </div>
        );
    } );

    return (
        <div className="pokemons-list pokemon-container">
            { pokemonDatas }
        </div> 
    );
}

export default PokemonsList;
