import { ProxyState } from "../AppState.js"
import { pokedexService } from "../Services/PokedexService.js"

function _draw(){
    let pokemon = ProxyState.pokedex
    let template = ""
    pokemon.forEach(p => template +=`<li class="on-hover" onclick="app.pokemonController.setActivePokemon('${p.name})> ${p.name} </li>`)
    document.getElementById("pokemonDex").innerHTML = template;
}

function _drawActivePokemon(){
    if(ProxyState.activePokemon){
        //Id is for center card
        document.getElementById("pokemonInfo").innerHTML = ProxyState.activePokemon.Template
    }
    else{
        document.getElementById("pokemonInfo").innerHTML = ""
    }
}

export default class PokedexController{
    constructor(){
        ProxyState.on("pokedex", _draw)
        ProxyState.on("activePokemon", _drawActivePokemon)
        _draw()
    }

    setActivePokemon(name){
        pokedexService.setActivePokemon(name)
    }
}