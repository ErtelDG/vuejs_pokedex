let colorCodes = [
   ["rock", "#B69E31"],
   ["ghost", "#70559B"],
   ["steel", "#B7B9D0"],
   ["water", "#6493EB"],
   ["grass", "#74CB48"],
   ["psychic", "#FB5584"],
   ["ice", "#9AD6DF"],
   ["dark", "#75574C"],
   ["fairy", "#E69EAC"],
   ["normal", "#AAA67F"],
   ["fighting", "#C12239"],
   ["flying", "#A891EC"],
   ["poison", "#A43E9E"],
   ["ground", "#DEC16B"],
   ["bug", "#A7B723"],
   ["fire", "#F57D31"],
   ["electric", "#F9CF30"],
   ["dragon", "#7037FF"],
   ["default", "#000000"],
];

// pokemon class
class PokemonCard {
   pokemonId!: number;
   pokemonName!: string;
   pokemonImage!: string;
   pokemonType1!: string;
   color!: string;
   pokemonGeneration!: string;
   pokemonWeight!: number;
   pokemonHeight!: number;
   pokemonAbilitie1!: string;
   flavorPokemon!: string;
   pokemonHP!: number;
   pokemonAtk!: number;
   pokemonDef!: number;
   pokemonSatk!: number;
   pokemonSdef!: number;
   pokemonSpd!: number;
   pokemonType2?: string;
   pokemonAbilitie2?: string;
   pokemonColor2?: string;

   constructor(
      pokemonId: number,
      pokemonName: string,
      pokemonImage: string,
      pokemonType1: string,
      color: string,
      pokemonGeneration: string,
      pokemonWeight: number,
      pokemonHeight: number,
      pokemonAbilitie1: string,
      flavorPokemon: string,
      pokemonHP: number,
      pokemonAtk: number,
      pokemonDef: number,
      pokemonSatk: number,
      pokemonSdef: number,
      pokemonSpd: number,
      pokemonType2?: string,
      pokemonAbilitie2?: string,
      pokemonColor2?: string
   ) {
      this.pokemonId = pokemonId;
      this.pokemonName = pokemonName;
      this.pokemonImage = pokemonImage;
      this.pokemonType1 = pokemonType1;
      this.color = color;
      this.pokemonGeneration = pokemonGeneration;
      this.pokemonWeight = pokemonWeight;
      this.pokemonHeight = pokemonHeight;
      this.pokemonAbilitie1 = pokemonAbilitie1;
      this.flavorPokemon = flavorPokemon;
      this.pokemonHP = pokemonHP;
      this.pokemonAtk = pokemonAtk;
      this.pokemonDef = pokemonDef;
      this.pokemonSatk = pokemonSatk;
      this.pokemonSdef = pokemonSdef;
      this.pokemonSpd = pokemonSpd;
      this.pokemonType2 = pokemonType2;
      this.pokemonAbilitie2 = pokemonAbilitie2;
      this.pokemonColor2 = pokemonColor2;
   }
}

//variable for fail requests
let found: boolean = true; //found a other pokemon?
let counterRequestFailToApi: number = 0;

// pokemon data save local:
let localPokemonsData: any = {};

/**
 *
 * greated data values we need for the current pokmon from the api
 */
let currentPokemon: number = 1;
let intermediateValue: number = 181;
let maxPokemons: number = 905;
let url1 = "https://pokeapi.co/api/v2/pokemon/";
let url2 = "https://pokeapi.co/api/v2/pokemon-species/";
//response api save here as json
let url1responseCurrentPokemonAsJson: any;
let url2responseCurrentPokemonAsJson: any;

async function greatCurrentPokemonValuesFromApi() {
   for (let i = currentPokemon; i <= intermediateValue; i++) {
      await getPokemonValueByApi(currentPokemon, url1);
      await getPokemonValueByApi(currentPokemon, url2);
      currentPokemon++;
      savePokemonLocal(i);
      //      renderSmallPokemonCard(i);
   }
   intermediateValue = intermediateValue + 181;
}

/**
 * to fetch poke api values
 *
 * @param currentPokemon => chose current pokemon
 * @param urlApi  => request url to pokemon datas
 */
async function getPokemonValueByApi(currentPokemon: number, urlApi: string) {
   try {
      let response;
      response = await fetch(urlApi + currentPokemon.toString());

      if (urlApi == "https://pokeapi.co/api/v2/pokemon/") {
         url1responseCurrentPokemonAsJson = await response.json();
      } else {
         url2responseCurrentPokemonAsJson = await response.json();
      }
   } catch {
      errorFunction(currentPokemon);
   }
}

/**
 * function and response, when request to api was incorrect or erroneous
 *
 * @param currentPokemon => chose current pokemon
 */
async function errorFunction(currentPokemon: number) {
   counterRequestFailToApi++;
   url1responseCurrentPokemonAsJson = {
      id: currentPokemon,
      status: "fail",
   };
   if (counterRequestFailToApi >= 4) {
      found = false;
      maxPokemons = currentPokemon;
      console.warn(`Request to API was stop by number ${currentPokemon}, you had min.${counterRequestFailToApi} fail request. Try again later.`);
   } else {
      console.warn(`Request not OK with number ${currentPokemon}, you have at the moment min.${counterRequestFailToApi} fail request.`);
   }
}

/**
 * pokemon save local
 *
 * @param i => id of the pokemon to save
 */
function savePokemonLocal(i: number) {
   if (url1responseCurrentPokemonAsJson != null && url1responseCurrentPokemonAsJson["status"] != "fail" && found == true) {
      createPokemonLocal(i, url1responseCurrentPokemonAsJson, url2responseCurrentPokemonAsJson);
   } else {
      found = false;
   }
}

/**
 * creat pokemon card at values api
 *
 * @param i => id of the pokemon for the request
 * @param url1responseCurrentPokemonAsJson  => url1 of the pokemon for the request of stats/values
 * @param url2responseCurrentPokemonAsJson => url2 of the pokemon for the request of stats/values
 */
function createPokemonLocal(i: number, url1responseCurrentPokemonAsJson: any, url2responseCurrentPokemonAsJson: any) {
   let type2Value = checkType2Exists(url1responseCurrentPokemonAsJson);
   let abilitie2Value = checkAbilitie2Exists(url1responseCurrentPokemonAsJson);
   let type1ValueForColor = setColorCodeCurrentPokemon(url1responseCurrentPokemonAsJson, 0);
   localPokemonsData[i] = new PokemonCard(
      url1responseCurrentPokemonAsJson["id"],
      url1responseCurrentPokemonAsJson["name"],
      url1responseCurrentPokemonAsJson["sprites"]["other"]["official-artwork"]["front_default"],
      url1responseCurrentPokemonAsJson["types"][0]["type"]["name"],
      type1ValueForColor,
      url2responseCurrentPokemonAsJson["generation"]["name"],
      parseInt(url1responseCurrentPokemonAsJson["weight"]) / 10,
      parseInt(url1responseCurrentPokemonAsJson["height"]) / 10,
      url1responseCurrentPokemonAsJson["abilities"][0]["ability"]["name"],
      url2responseCurrentPokemonAsJson["flavor_text_entries"][0]["flavor_text"],
      url1responseCurrentPokemonAsJson["stats"][0]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][1]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][2]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][3]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][4]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][5]["base_stat"],
      type2Value,
      abilitie2Value
   );
}

/**
 * function checks if type2 exists for the pokemon
 *
 * @param url1responseCurrentPokemonAsJson => url of the pokemon for the request of the value
 * @returns => return undefined or the value when exists
 */
function checkType2Exists(url1responseCurrentPokemonAsJson: any) {
   let type2Value: string = "undefined";
   if (url1responseCurrentPokemonAsJson["types"].length > 1) {
      type2Value = url1responseCurrentPokemonAsJson["types"][1]["type"]["name"];
   }
   return type2Value;
}

/**
 * function checks if abilitie2 exists for the pokemon
 *
 * @param url1responseCurrentPokemonAsJson => url of the pokemon for the request of the value
 * @returns => return undefined or the value when exists
 */
function checkAbilitie2Exists(url1responseCurrentPokemonAsJson: any) {
   let abilitie2Value: string = "undefined";
   if (url1responseCurrentPokemonAsJson["abilities"].length > 1) {
      abilitie2Value = url1responseCurrentPokemonAsJson["abilities"][1]["ability"]["name"];
   }
   return abilitie2Value;
}

/**
 * function checks the second color for the second type, when this exists for the pokemon
 *
 * @param url1responseCurrentPokemonAsJson => url of the pokemon for the request of the value
 * @param typePosition  => index of the second type position
 * @returns => return undefined or set the correct color
 */
function setColorCodeCurrentPokemon(url1responseCurrentPokemonAsJson: any, typePosition: number) {
   let type1ValueForColor: string = "undefined";
   for (let d = 0; d < colorCodes.length; d++) {
      const element = colorCodes[d];
      if (element[0] == url1responseCurrentPokemonAsJson["types"][typePosition]["type"]["name"]) {
         type1ValueForColor = element[1];
         break;
      }
   }
   return type1ValueForColor;
}
