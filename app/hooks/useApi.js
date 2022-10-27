import { useState } from "react";
import { getPokemonId } from "../utils/utils";
export const useApi = () => {
    const [pokemonData, setPokemonData] = useState(null)
    const [pokemonDetails, setPokemonDetails] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, setError] = useState()

    const request = async (url) => {
        setloading(true)
        await fetch(url).then(response => response.json())
            .then(data => {

                const results = data.results.map(pokemon => {
                    const pokemonId = getPokemonId(pokemon.url)
                    return { ...pokemon, image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png` }
                })
                pokemonData ? setPokemonData([...pokemonData, ...results]) : setPokemonData(results)

            })
            .catch(error => setError(error))
        setloading(false)
    }

    const getPokemonDetails = async (pokemonId) => {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => response.json())
            .then(data => {
                const type = data.types.map(pokemon => pokemon.type.name)
                const name = data.name
                const weight = data.weight
                const sprites = data.sprites
                const movements = data.moves.map(pokemon => pokemon.move.name)
                const pokemonDetail = { name, type, weight, sprites, movements, image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png` }
                setPokemonDetails(pokemonDetail)
            })
            .catch(error => console.log("error", error))
    }

    return { pokemonData, loading, error, request, getPokemonDetails, pokemonDetails }
}