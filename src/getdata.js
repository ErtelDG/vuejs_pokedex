url1 = "https://pokeapi.co/api/v2/pokemon/";
url2 = "https://pokeapi.co/api/v2/pokemon-species/";

let data = {
   1: {
      pokemonId: 1,
      pokemonName: "bulbasaur",
      pokemonImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      color: "#74CB48",
      pokemonGeneration: "generation-i",
   },
}; 

async

let  response = await fetch(url1+"1"); 
console.log(response)