/* Core */
import React from 'react'
/* Style */
import './pokemon-card.scss';

const PokemonCard = ({ url, name }) => {
    return (
        <div className="pokemon-card">
            <img className="sprite" src="#" alt={ name } />
            <span className="align-bottom">{ name }</span>
        </div> 
    );
}

export default PokemonCard;