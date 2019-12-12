/* Core */
import React, { Component } from 'react'
/* Style */
import './pokemon-modal.scss';
import pokeball from './images/pokeball.png';


export default class PokemonModal extends Component {

    state = {}

    getAbilitiesList = ( abilities, abilitiesInfo ) => {
        if ( abilities ) {
            return abilities.sort((a, b) => a.slot - b.slot ).map((item, key) => {
                const { ability, is_hidden, slot } = item // is_hidden, ability.url
                const hiddenClass = is_hidden ? ' is_hidden' : ''
                if(abilitiesInfo) {
                    console.log({abilitiesInfo})
                }
                
                return (
                    <li key={key} className={ `abilities-list__item  ${hiddenClass}` } >
                        <span className="ability-item"  >
                                <span className="item-image">
                                    <img 
                                        className="sprite" 
                                        alt={ ability.name } 
                                        src={ pokeball } 
                                    />
                                </span>
                                <span className="item-name">{ ability.name }</span>
                                <span className="item-slot">{ slot }</span>
                            </span>
                        <span className="ability-description">sdgsd</span>
                    </li>
                )
            })
        }
    
    }



    render() {
        const { isOpen, showPokemon, onChangeModal, pokemonAbilities } = this.props

        const isOpenClass = isOpen ? 'pokemon-modal__open' : ''
        const pokemonInfo = showPokemon ? showPokemon : ''
    
        const { id, name, weight, height, base_experience, abilities } = pokemonInfo
        
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
                        <li className="list-group-item">
                            <ul className="abilities-list">
                                { this.getAbilitiesList( abilities, pokemonAbilities ) }
                            </ul>
                        </li>
                        
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
}