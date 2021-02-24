import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";

class PokedexService {
    

    constructor(){
        console.log("pokedex service")
        this.getPokemon()
    }

    async getPokemon(){
        try {
            const res = await api.get('pokemon')
            ProxyState.pokemon = res.data.map(rawPokemon => new rawPokemon(rawPokemon))
        } catch (error) {
            console.error(error)
        }
    }
}

export const pokedexService = new PokedexService()