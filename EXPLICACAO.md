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
  <li> 1-> Use o comando git clone junto a esse link git@github.com:lucassilvap/RaiseIT-Identity-Test.git </li>
  <li> 2 -> Após clonar o projeto use o comando npm install estando dentro da pasta principal do projeto </li>
  <li> 3 -> Então entre em src e rode o comando node --loader ts-node/esm --experimental-specifier-resolution=node server.ts parar iniciar o server</li>
</ul>

<h3>Detalhes da aplicação rodando </h3>

<h5>Pokemon com imc sem categoria </h5>

![BuscarPokemonComImcSemCategoria](https://github.com/user-attachments/assets/d5fc788c-b4b4-4bf8-ae17-11e99a938e8b)




