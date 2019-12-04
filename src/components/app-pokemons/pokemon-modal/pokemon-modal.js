/* Core */
import React from 'react'
/* Style */
import './pokemon-modal.scss';

const PokemonModal = ({ isOpen, showPokemon, onClose }) => {

    const isOpenClass = isOpen ? 'pokemon-modal__open' : '';

    return (
        <div className={`pokemon-modal modal ${isOpenClass}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="close" onClick={ onClose } ><span>&times;</span></button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                    {showPokemon}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={ onClose } >Close</button>
                </div>
                </div>
            </div>
        </div> 
    );
}

export default PokemonModal;