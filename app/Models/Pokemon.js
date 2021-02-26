
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
                <p class="card-text">Type: ${this.Types}</p>
                <p class="card-text">Weight: ${this.weight}</p>
            </div>
            <button class="btn btn-info" onclick="app.">Capture</button>
        </div>`
    }

    get Types(){
        let template = ""
        this.types.array.forEach(elem => template += elem.type.name);
    }
}