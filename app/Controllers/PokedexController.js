import { ProxyState } from "../AppState.js"
import { pokedexService } from "../Services/PokedexService.js"

function _draw(){
    let pokemon = ProxyState.pokemonArr
    let template = ""
    pokemon.forEach(p => template +=`<li onsubmit="app.pokedexController.setActivePokemon('${p.index}')"> ${p.name} </li>`)
    document.getElementById("pokemonDex").innerHTML = template;
    console.log(ProxyState.pokemonArr[0])
}

function _drawActivePokemon(){
    if(ProxyState.activePokemon){
        document.getElementById("pokemonInfo").innerHTML = ProxyState.activePokemon.Template
    }
}

export default class PokedexController{
    constructor(){
        console.log("pokedex controller")
        console.log(ProxyState.pokemonArr)
        _draw()
        ProxyState.on("pokemonArr", _draw)
        ProxyState.on("activePokemon", _drawActivePokemon)
    }

    setActivePokemon(index){
        console.log(index)
        pokedexService.setActivePokemon(index)
    }
}