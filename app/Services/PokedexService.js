import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { api } from "./AxiosService.js";


class PokedexService {

    constructor(){
        console.log("pokedex service")
        this.getPokemon()
    }

    async getPokemon(){
        try {
            const res = await api.get("")
            //console.log(res)
            ProxyState.pokemonArr = res.data.results
        } catch (error) {
            console.error(error)
        }
    }

    // async setActivePokemon(index){
    //     try {
    //         const res = await api.get(index)
    //         console.log(res)
    //         ProxyState.activePokemon = new Pokemon(res.data)
    //     } catch (error) {
            
    //     }
    // }
}

export const pokedexService = new PokedexService()