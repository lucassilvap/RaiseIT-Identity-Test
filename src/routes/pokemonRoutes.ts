
import { Router } from 'express'
import { fetchPokemons, fetchPokemonsWithCategory, fetchPokemonByName } from '../api/pokemonService'
const router = Router();

router.get('/pokemon', async (req, res) => {
    try {
        const pokemon = await fetchPokemons();
        res.json(pokemon);
    }
    catch (error) {
        res.status(500).json("Pokemon não encontrado");
    }
});

router.get('/pokemons', async (req, res) => {
    try {
        const pokemon = await fetchPokemonsWithCategory();
        res.json(pokemon);
    }
    catch (error) {
        res.status(500).json("Pokemon não encontrado");
    }
});


router.get('/pokemons/:name', async (req, res) => {
    try {
        const { name } = req.params;

        const pokemon = await fetchPokemonByName(name);
        res.json(pokemon);
    }
    catch (error) {
        res.status(500).json("Pokemon não encontrado");
    }
});


export default router;




