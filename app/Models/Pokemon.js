
export default class Pokemon{
    constructor({index, name, types, sprites: front_default, weight}){
        this.index = index
        this.name = name
        this.types = types
        this.sprites = front_default
        this.weight = weight
    }

    get Template() {
        return /*html*/ `
        <div class="card">
        <img class="card-img-top" src="${this.sprites}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.name}</h4>
                <p class="card-text">Type: ${this.types}</p>
                <p class="card-text">Weight: ${this.weight}</p>
            </div>
        </div>`
    }
}