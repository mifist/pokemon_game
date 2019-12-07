/* Core */
import React from 'react'
/* Style */
import './pokemon-modal.scss';

const PokemonModal = ({ isOpen, showPokemon, onChangeModal }) => {

    const isOpenClass = isOpen ? 'pokemon-modal__open' : '';
    const pokemonInfo = showPokemon ? showPokemon : '';
    console.log({pokemonInfo})
    const { id, name, weight, height, base_experience } = pokemonInfo

    return (
        <div className={`pokemon-modal modal ${isOpenClass}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">
                        { `Short information about -` } <b>{name}</b>
                        </h5>
                    <button type="button" className="close" onClick={ onChangeModal } ><span>&times;</span></button>
                </div>
                <div className="modal-body">
                <img className="sprite" alt={ name } 
                src={`/pokemon-svg/${id}.svg`} />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Pokemon id: {id}</li>
                    <li className="list-group-item">Height: {height}</li>
                    <li className="list-group-item">Weight: {weight}</li>
                    <li className="list-group-item">Base experience: {base_experience}</li>
                </ul>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={ onChangeModal } >Close</button>
                </div>
                </div>
            </div>
        </div> 
    );
}

export default PokemonModal;