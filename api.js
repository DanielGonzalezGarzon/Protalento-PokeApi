
let globalPokemon;

async function getPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const responseJson = await response.json();
    console.log(responseJson);
    const pokemons = responseJson.results;
    console.log(pokemons);
    document.write(pokemons);

    for (let i = 0; i < pokemons.length; i++) {
      const pokemonUrl = pokemons[i].url;
      const response = await fetch(pokemonUrl);
      const responseJson = await response.json();
      normalPokemons(pokemon.name, responseJson);
    }
  } catch (error) {
    console.log(error);
  }
}

getPokemons();

const normalPokemons = (name, img) => {
  const img = responseJson.sprites.other['official-artwork'].front_default;
  const pokemon = {
    name: name,
    img: img
  };
  globalPokemon.push(pokemon);

}


/* Se esta consultando como consumir la API en un primer momento, para traer la info que se requiere, postarior se buscara mostrarla  */