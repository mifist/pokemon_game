/* Core */
import React from 'react'
/* Style */
import './pokemon-card.scss';

const PokemonCard = ({ url, name, onPokemonSelected, pokemonKey }) => {

    return (
        <div key={ name } className="pokemon-card" >
            <img className="sprite" alt={ name } 
                src={`/pokemon-svg/${pokemonKey}.svg`} />
            <div className="pokemon-card__footer">
                <a href={url} className="pokemon-card__link">{ name } - {pokemonKey}</a>
                <button type="button" className="btn btn-outline-info"
                    onClick={ onPokemonSelected } >
                    More Information
                </button>
            </div>
        </div>
    );
}

export default PokemonCard;