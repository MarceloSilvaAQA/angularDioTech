    const pokeApi = {}

    function convertPokeApiDetailToPokemon (pokemonDetail) {
        const pokemon = new Pokemon()
        pokemon.number = pokemonDetail.order
        pokemon.name = pokemonDetail.name

        const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
        const [type] = types

        pokemon.types = types
        pokemon.type = type

        pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default

        return pokemon

    }
    pokeApi.getPokemonsDetail = (pokemon) => {
       return fetch(pokemon.url)
       .then((response) => response.json())
       .then(convertPokeApiDetailToPokemon)
    }

    pokeApi.getPokemons = (offset = 0, limit = 5) => {
        const url = `https://pokeapi.co/api/v2/pokemon?toffset=${offset}&limit=${limit}`
        return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
            .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
            .then((detailRequests) => Promise.all(detailRequests))   
            .then((pokemonDetails) => pokemonDetails) 
}
