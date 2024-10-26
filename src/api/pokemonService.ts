import axios from 'axios'
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

interface Pokemon {
    name: string;
    height: number;
    weight: number;
    imc: string;
}

interface PokemonWithCategory {
    name: string;
    height: number;
    weight: number;
    imc: string;
    category: string
}

function calculateIMC(weight: number, height: number): number {
    return weight / (height * height);
}

function convertHgInKg(hg: number): number {
    return hg / 10;
}

function convertDmInMeters(dm: number): number {
    return dm / 10;
}

function imcCategory(imc: number): string {
    if (imc < 10) {
        return "light";
    } else if (imc >= 10 && imc <= 20) {
        return "average";
    } else {
        return "heavy";
    }
}

export async function fetchPokemons(): Promise<Pokemon[]> {
    try {
        const response = await axios.get(`${BASE_URL}`);
        const pokemonsData = response.data.results;

        const pokemons: Pokemon[] = [];

        for (const pokemon of pokemonsData) {
            const pokemonResponse = await axios.get(pokemon.url);
            const { name, height, weight } = pokemonResponse.data;

            pokemons.push({
                name: name,
                height: convertDmInMeters(height),
                weight: convertHgInKg(weight),
                imc: calculateIMC(weight, height).toFixed(2)
            });
        }
        return pokemons;

    } catch (error) {
        throw new Error('Error when searching for Pokémon' + error);
    }
};


export async function fetchPokemonsWithCategory(): Promise<Pokemon[]> {
    try {


        const response = await axios.get(`${BASE_URL}`);
        const pokemonsData = response.data.results;


        const pokemons: PokemonWithCategory[] = [];

        for (const pokemon of pokemonsData) {
            const pokemonResponse = await axios.get(pokemon.url);
            const { name, height, weight } = pokemonResponse.data;

            const heightInMeters: number = convertDmInMeters(height);
            const weightInKg: number = convertHgInKg(weight);

            const imc: number = calculateIMC(weight, height);
            const imcClassification: string = imcCategory(imc);

            pokemons.push({
                name: name,
                height: heightInMeters,
                weight: weightInKg,
                imc: imc.toFixed(2),
                category: imcClassification
            });
        }
        return pokemons;

    } catch (error) {
        throw new Error('Error when searching for Pokémon' + error);
    }
};


export async function fetchPokemonByName(namePokemon: string): Promise<Pokemon> {
    try {
        const response = await axios.get(`${BASE_URL}/${namePokemon.toLowerCase()}`);
        const heightInMeters: number = convertDmInMeters(response.data.height);
        const weightInKg: number = convertHgInKg(response.data.weight);
        const imc: number = calculateIMC(response.data.weight, response.data.height);
        const imcClassification: string = imcCategory(imc);
        const pokemon: PokemonWithCategory = { name: response.data.forms[0].name, height: heightInMeters, weight: weightInKg, imc: imc.toFixed(2), category: imcClassification };

        return pokemon;

    } catch (error) {
        throw new Error('Error when searching for Pokémon' + error);
    }
};