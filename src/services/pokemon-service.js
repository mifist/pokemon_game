export default class PokemonService {

    _apiBase = 'https://pokeapi.co/api/v2'
    
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`, {method: "GET"})

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json()
    }

    getPokemon(name) {
        const res = this.getResource(`/pokemon/${name}`)
        return res
    }
    async getLimitPokemons(limit) {
        const res = await this.getResource(`/pokemon/?limit=${limit}`)
        return res
    }
    getPokemonAbility( ability_name ) {
        const res = this.getResource(`/ability/${ability_name}`)
        return res
    }
    getPokemonColor() {
        const res = this.getResource(`/pokemon-color/`)
        return res
    }
    getPokemonType() {
        const res = this.getResource(`/type/`)
        return res  
    }
    getPokemonShape() {
        const res = this.getResource(`/pokemon-shape/`)
        return res  
    }
    getPokemonSpecies() {
        const res = this.getResource(`/pokemon-species/`)
        return res  
    }
    getPokemonStat() {
        const res = this.getResource(`/stat/`)
        return res  
    }
    getPokemonForm() {
        const res = this.getResource(`/pokemon-form/`)
        return res  
    }
    getPokemonGender() {
        const res = this.getResource(`/gender/`)
        return res
    }
    getCharacteristic() {
        const res = this.getResource(`/characteristic/`)
        return res
    }
    
    // Evolution
    getEvolutionChain() {
        const res = this.getResource(`/evolution-chain/`)
        return res
    }
    getEvolutionTrigger() {
        const res = this.getResource(`/evolution-trigger/`)
        return res  
    }

    // move
    getMove() {
        const res = this.getResource(`/move/`)
        return res  
    }
    getMoveBattleStyle() {
        const res = this.getResource(`/move-battle-style/`)
        return res  
    }
    getMoveDamageClass() {
        const res = this.getResource(`/move-damage-class/`)
        return res  
    }
    getMoveAilment() {
        const res = this.getResource(`/move-ailment/`)
        return res  
    }
    getMoveLearnMethod() {
        const res = this.getResource(`/move-learn-method/`)
        return res  
    }
    getMoveTarget() {
        const res = this.getResource(`/move-target/`)
        return res  
    }
    getMoveCategory() {
        const res = this.getResource(`/move-category/`)
        return res  
    }

    // Contest
    getContestType() {
        const res = this.getResource(`/contest-type/`)
        return res  
    }
    getContestEffect() {
        const res = this.getResource(`/contest-effect/`)
        return res  
    }
    getSuperContestEffect() {
        const res = this.getResource(`/super-contest-effect/`)
        return res  
    }

    // Item
    getItem() {
        const res = this.getResource(`/item/`)
        return res 
    }
    getItemAttribute() {
        const res = this.getResource(`/item-attribute/`)
        return res  
    }
    getItemPocket() {
        const res = this.getResource(`/item-pocket/`)
        return res  
    }
    getItemFlingEffect() {
        const res = this.getResource(`/item-fling-effect/`)
        return res 
    }
    getItemCategory() {
        const res = this.getResource(`/item-category/`)
        return res 
    }
    
    // Location
    getLocation() {
        const res = this.getResource(`/location/`)
        return res  
    }
    getLocationArea(id) {
        const res = this.getResource(`/location-area/${id}`)
        return res  
    }
    getRegion() {
        const res = this.getResource(`/region/`)
        return res  
    }

    // Berry
    getBerry() {
        const res = this.getResource(`/berry/`)
        return res 
    }
    getBerryFlavor() {
        const res = this.getResource(`/berry-flavor/`)
        return res 
    }
    getBerryFirmness() {
        const res = this.getResource(`/berry-firmness/`)
        return res 
    }

    // other
    getGeneration() {
        const res = this.getResource(`/generation/`)
        return res  
    }
    getEncountercondition() {
        const res = this.getResource(`/encounter-condition/`)
        return res  
    }
    getEncounterConditionValue() {
        const res = this.getResource(`/encounter-condition-value/`)
        return res  
    }
    getEggGroup() {
        const res = this.getResource(`/egg-group/`)
        return res 
    }
    getPokedex() {
        const res = this.getResource(`/pokedex/`)
        return res 
    }
    getPalParkArea() {
        const res = this.getResource(`/pal-park-area/`)
        return res  
    }
    getVersion() {
        const res = this.getResource(`/version/`)
        return res  
    }
    getVersionGroup() {
        const res = this.getResource(`/version-group/`)
        return res 
    }
    getPokeathlonStat() {
        const res = this.getResource(`/pokeathlon-stat/`)
        return res  
    }
    getPokemonHabitat() {
        const res = this.getResource(`/pokemon-habitat/`)
        return res  
    }
    getNature() {
        const res = this.getResource(`/nature/`)
        return res  
    }
    getEncounterMethod() {
        const res = this.getResource(`/encounter-method/`)
        return res 
    }
    getLanguage() {
        const res = this.getResource(`/language/`)
        return res 
    }
    getGrowthRate() {
        const res = this.getResource(`/growth-rate/`)
        return res 
    }


    _transformLimitPokemons = (item) => {
        return {
            count: item.count,
            next: item.next,
            previous: item.previous,
            pokemons: item.results
        }
    }

}