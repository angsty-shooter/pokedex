import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokedex.js";
import { api } from "./AxiosService.js";


class PokedexService {

    constructor(){
        console.log("pokedex service")
        this.getPokemon()
    }

    async getPokemon(){
        try {
            const res = await api.get('pokemon')
            ProxyState.pokemonArr = res.data.map(rawPokemon => new Pokemon(rawPokemon))
        } catch (error) {
            console.error(error)
        }
    }
}

export const pokedexService = new PokedexService()