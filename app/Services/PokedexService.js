import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";


class PokedexService {

    constructor(){
        this.getPokemon()
    }

    async getPokemon(){
        try {
            const res = await pokeApi.get("")
            //console.log(res)
            ProxyState.pokedex = res.data.results
        } catch (error) {
            console.error(error)
        }
    }

     async setActivePokemon(index){
         try {
             const res = await pokeApi.get(index)
             ProxyState.activePokemon = new Pokemon(res.data)
         } catch (error) {
            console.error(error)
         }
    }
}

export const pokedexService = new PokedexService()