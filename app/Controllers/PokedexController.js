import { ProxyState } from "../AppState.js"
import { pokedexService } from "../Services/PokedexService.js"

function _draw(){
    let pokemon = ProxyState.myPokemon
    let template = ""
    pokemon.forEach(p => template +=`<li onsubmit="app.pokedexController.setActivePokemon('${p.index}')"> ${p.name} </li>`)
    document.getElementById("pokemonDex").innerHTML = template;
    console.log(ProxyState.myPokemon[0])
}

function _drawActivePokemon(){
    if(ProxyState.activePokemon){
        document.getElementById("pokemonInfo").innerHTML = ProxyState.activePokemon.Template
    }
}

export default class PokedexController{
    constructor(){
        console.log("pokedex controller")
        console.log(ProxyState.myPokemon)
        _draw()
        ProxyState.on("myPokemon", _draw)
        ProxyState.on("activePokemon", _drawActivePokemon)
    }

    setActivePokemon(index){
        console.log(index)
        pokedexService.setActivePokemon(index)
    }
}