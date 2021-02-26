
// @ts-ignore
export const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 10000
})

// @ts-ignore
export const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/ashley/pokemon',
    timeout: 10000
})