import { ProxyState } from "../AppState.js"
import { pokedexService } from "../Services/PokedexService.js"

function _draw(){
    let pokemon = ProxyState.pokemonArr
    let template = ""
    pokemon.forEach(s => template += `<li onclick="app.PokedexController.setActiveSpell('${s.index}')"> ${s.name} </li>`)
    document.getElementById("pokemon").innerHTML =template;

}

export default class PokedexController{
    constructor(){
        console.log("pokedex controller")
        _draw()
    }
}