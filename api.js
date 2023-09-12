let globalPokemon = [];
//const mainContainer = document.querySelector('.main-container');

async function getPokemons() {
  try {
    //Consultar la API
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    // Consumir la API en un formato que pueda procesar (JSON)
    const responseJson = await response.json();
    //para mostrar que tiene el responseJson
    // --- console.log(responseJson);
    // No me sirve toooodo lo que tiene la API, solo quiero los results
    const pokemons = responseJson.results;
    //para mostrar que tiene el pokemons
   // --- console.log(pokemons);

    //Me voy a crear una variable temporal para cada uno de los pokemons
    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      //Aqui extraigo la URL del array pokemons
      const pokemonUrl = pokemon.url;
      //Consultar la API
      const response = await fetch(pokemonUrl);
      // Consumir la API en un formato que pueda procesar (JSON)
      const responseJson = await response.json();
      //Necesito capturar la URL
      normalPokemons(pokemon.name, responseJson);
    }
  } catch (error) {
    console.log(error);
  }
}

const normalPokemons = (name, responseJson) => {
  //Es el path que tengo que seguir para encontrar la URL de la imagen de cada pokemon
  const img = responseJson.sprites.other["official-artwork"].front_default;
  console.log(img);
  const pokemon = {
    name: name,
    img: img,
  };
  console.log(pokemon);
  //Agrego cada uno de los pokemons a mi arreglo
  globalPokemon.push(pokemon);
};


const renderPokemonCard = (element) => {
  const cardPokemonDiv = document.createElement("div");
  cardPokemonDiv.classList ='card';
  cardPokemonDiv.innerHTML = `
          <h2>${element.name}</h2>
          <img src='${element.img}' />
          `;
  mainContainer.appendChid(cardPokemonDiv);
}; 

const renderPokemons = (globalPokemon) => {
  //Aqui mostramos en pantalla c/u de los pokemos agregados en globalPokemon
  for (let i = 0; i < globalPokemon.length; i++) {
    //Para cada imagen se de las img en globalPokemon se CREA un DIV
    renderPokemonCard(globalPokemon[i]);
  }
};

async function main(){
  await getPokemons();
  renderPokemonCard();
}

main();

// 1:28:43 Buscando el error para que funcione
// -- console.log(main);


