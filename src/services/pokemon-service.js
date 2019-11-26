export default class PokemonService {

    _apiBase = 'https://pokeapi.co/api/v2/';
    
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`, {method: "GET"});

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    getLimitPokemonsUrl(limit) {
        const res = this.getResource(`pokemon/?limit=${limit}`);
        return res;
    }



}