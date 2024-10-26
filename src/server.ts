
import express from 'express'
import pokeRoutes from './routes/pokemonRoutes'


const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', pokeRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});



