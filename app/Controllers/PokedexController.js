import { ProxyState } from "../AppState.js"
import { pokedexService } from "../Services/PokedexService.js"

function _draw(){
    let pokemon = ProxyState.pokemonArr
    let template = ""
    pokemon.forEach(p => template +=`<li> ${p.name} </li>`)
    document.getElementById("pokemonDex").innerHTML = template;
    console.log(ProxyState.pokemonArr[0])
}

export default class PokedexController{
    constructor(){
        console.log("pokedex controller")
        console.log(ProxyState.pokemonArr)
        _draw()
        ProxyState.on("pokemonArr", _draw)
    }
}