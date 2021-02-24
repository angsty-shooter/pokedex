import { ProxyState } from "../AppState.js"
import { pokedexService } from "../Services/PokedexService.js"

function _draw(){
    let pokemon = ProxyState.pokemonArr
    let template = ""
    pokemon.forEach(p => template )//+=`<li onclick="app.pokedexController.setActiveSpell('${p.index}')"> ${p.name} </li>`)
    document.getElementById("pokemonDex").innerHTML =template;

}

export default class PokedexController{
    constructor(){
        console.log("pokedex controller")
        ProxyState.on("pokemonArr", _draw)
        _draw()
    }
}