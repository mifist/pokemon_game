/* Core */
import React, {Component} from 'react';
/* Style */
import './app-body.scss';
/* Services */
import PokemonService from '../../services/pokemon-service';
/* Component */
import PokemonsList from '../app-pokemons/pokemons-list';


export default class AppBody extends Component {

    pokemonService = new PokemonService()

    state = { 
        error: false,
        loading: false
    }

    // Handlers
    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
            pokemons: []
        })
    }

    getPokemonsData = ( pokemons ) => {
        console.log('getPokemonsData')

        this.setState({
            pokemons
        })
    }

    // called just before component rendering | Component Life Cycle
    UNSAFE_componentWillMount() { 
        console.log("UNSAFE_componentWillMount()")
        
    }

    // called after component rendering. Here you can query for remote resources | Component Life Cycle
    componentDidMount() {
        console.log("componentDidMount()")
        this.pokemonService
        .getLimitPokemons(28)
        .then(this.getPokemonsData)
        .catch(this.onError)
    }

    render() {
        const { pokemons } = this.state
        return (
            <main className="app-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <PokemonsList pokemons={ pokemons } />
                        </div>
                    </div>
                </div>
            
                
            </main>  
        );
    }
}