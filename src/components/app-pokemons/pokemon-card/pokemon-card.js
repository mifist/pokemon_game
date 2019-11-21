/* Core */
import React from 'react'
/* Style */
import './pokemon-card.scss';

const PokemonCard = ({ url, name }) => {
    return (
        <div key={ name } className="pokemon-card">
            <img className="sprite" alt={ name } 
                src={`http://pokestadium.com/sprites/xy/${name}.gif`} />
            <a href={url} className="align-bottom" >{ name }</a>
        </div>
    );
}

export default PokemonCard;