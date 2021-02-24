
export default class Pokemon{
    constructor({name, types, sprites: front_default}){
        this.name = name
        this.types = types
        this.sprites = front_default
        // this.sprites = sprites

    }

    get Template() {
        return /*html*/ `<div class="card">
        <img class="card-img-top" src="${this.sprites}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">Type: ${this.types}</p>
        </div>
        </div>`
    }
}