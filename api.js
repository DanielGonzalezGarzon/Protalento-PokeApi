let globalPokemon = [];

async function getPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const responseJson = await response.json();
    console.log(responseJson);
    const pokemons = responseJson.results;
    console.log(pokemons);
    

    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons [i];
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

const normalPokemons = (name, responseJson) => {
  const img = responseJson.sprites.other["official-artwork"].front_default;
  const pokemon = {
    name: name,
    img: img,
  };
  console.log(pokemon);
  
  globalPokemon.push(pokemon);
};

const renderPokemonCard = (element) =>{
  const CardPokemonDiv = document.createElement('div');
  CardPokemonDiv.classList = 'card';
  CardPokemonDiv.innerHTML = `
  <h2>${element.name}</h2>
  <img src='${element.img}'/>`;
  mainContainer.appendChid(CardPokemonDiv);
}
/* Video 1:24:00 */
const renderPokemons = () =>{
  for (let i = 0; i < globalPokemon.length; i++) {
    renderPokemonCard (globalPokemon[i]);
    
  }
}

