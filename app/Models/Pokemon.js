
export default class Pokemon{
    constructor({data}){
        this.name = data.name
        this.types = data.types
        this.img = data.img || data.sprites.front_default
        this.weight = data.weight
    }

    get Template() {
        return /*html*/ `
        <div class="card">
        <img class="card-img-top" src="${this.img}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.name}</h4>
                <p class="card-text">Type: ${this.pTypes}</p>
                <p class="card-text">Weight: ${this.weight}</p>
            </div>
            ${this.Buttons}
        </div>`
    }

    get pTypes(){
        let template = ''
        this.types.forEach(t => template += t.type.name + ' ')
        return template
    }

    get Buttons(){
        if(this.isCaught){
          return /*html*/ `
          <button class="btn btn-danger" onclick="app.caughtPokemonController.releasePokemon()">Release Pokemon</button>
          `
        } else {
          return /*html*/ `
          <button class="btn btn-success" onclick="app.caughtPokemonController.catchPokemon()">Catch Pokemon</button>
          `
        }
      }
}