A aplicação foi estruturada em três elementos fundamentais: pokemonService, ppokemonRoutes e o serviço.
No serviço pokemon, duas interfaces foram empregadas: pokemon e pokemoncategoria. A pokémon contém informações como nome, altura, peso e imc, enquanto a pokémoncategoria inclui: nome, altura, peso, imc e categoria.
Uma função separada foi estabelecida que recebe altura e peso e retorna o valor obtido do imc.
Também foram criadas duas funções que convertem hg em kg e dm em metros.
Uma função foi desenvolvida para retornar a categoria do imc, que pode ser leve, médio ou pesado. Ela usa o imc já calculado como parâmetro e retorna a categoria desse imc.
Foi desenvolvida uma função assíncrona chamada fetchPokemons, responsável por preencher um array de pokemons de acordo com a interface pokemon.
Outra função assíncrona, fetchPokemonsWithCategory, é responsável por retornar uma lista de pokemons, acrescentando a categoria do pokemon, que indica o tipo de imc do pokemon.
A função fetchPokemonByName, por fim, retorna um pokemon detalhado, que é recebido na função através de um nome.
Na parte do server foi utilizado o express pra que foi utilizado para a criação do servidor web. Foi iniciado na port 3000.
Já no pokemonsRoutes estão os endpoints da aplicação. Há o /pokemon que retorna uma lista de pokemon, também o /pokemons que retorna a mesma lista de pokemons com adição da categoria e por ultimo /pokemons/:name que busca 
um pokemon detalhado por nome.


<h3> Como rodar a aplicação ? </h3>

<ul>
  <li>1->Use o comando git clone junto com o projeto git@github.com:lucassilvap/RaiseIT-Identity-Test.git </li>
  <li>teste2</li>
</ul>



