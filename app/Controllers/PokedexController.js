import { ProxyState } from "../AppState.js"
import { pokedexService } from "../Services/PokedexService.js"

function _draw(){
    let pokemon = ProxyState.pokemon
}

export default class PokedexController{
    constructor(){
        console.log("pokedex controller")
        _draw()
    }
}