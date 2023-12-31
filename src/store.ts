import { createStore } from "vuex";

// global variable who need in the project for all and rendering!
let currentPokemon: number = 1;
let intermediateValue: number = 181;
let maxPokemons: number = 905;
let generation1: any = {};
let generation2: any = {};
let generation3: any = {};
let generation4: any = {};
let generation5: any = {};
let generation6: any = {};
let generation7: any = {};
let generation8: any = {};
let generation9: any = {};
let searchAllPokemonsArray: string[] = [];

let type2 = "undefined";
let abilities2 = "undefined";
let color2 = "undefined";

//ulr´s api
let url1: string = "https://pokeapi.co/api/v2/pokemon/"; // Poke API v2 URL für Statistiken
let url2: string = "https://pokeapi.co/api/v2/pokemon-species/"; // Poke API v2 URL für Generation und Farbe

//response api save here as json
let url1responseCurrentPokemonAsJson: any;
let url2responseCurrentPokemonAsJson: any;

//variable for fail requests
let found: boolean = true; // Einen anderen Pokemon gefunden?
let counterRequestFailToApi: number = 0;

// pokemon data save local:
let localPokemonsData: any = {};

//variable for render contains
//contain for small pokemon cards
let containerRenderAllPokemonSmall = document.getElementById("renderAllPokemonSmall");
let pokemonsSearchId = document.getElementById("pokemonsSearchId");

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

// pokemon base class
class PokemonCardBaseData {
   pokemonId!: number;
   pokemonName!: string;
   pokemonImage!: string;
   color!: string;
   pokemonGeneration!: string;

   constructor(pokemonId: number, pokemonName: string, pokemonImage: string, color: string, pokemonGeneration: string) {
      this.pokemonId = pokemonId;
      this.pokemonName = pokemonName;
      this.pokemonImage = pokemonImage;
      this.color = color;
      this.pokemonGeneration = pokemonGeneration;
   }
}

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

// define variables
const state = {
   currentPokemon,
   intermediateValue,
   maxPokemons,
   generation1,
   generation2,
   generation3,
   generation4,
   generation5,
   generation6,
   generation7,
   generation8,
   generation9,
   searchAllPokemonsArray,
   type2,
   abilities2,
   color2,
   url1,
   url2,
   url1responseCurrentPokemonAsJson,
   url2responseCurrentPokemonAsJson,
   found,
   counterRequestFailToApi,
   localPokemonsData,
   containerRenderAllPokemonSmall,
   pokemonsSearchId,
   PokemonCard,
   PokemonCardBaseData,
   colorCodes,
};

// Getter definieren
const getters = {
   // Ihre Getter hier
};

// Mutationen definieren
const mutations = {
   // Ihre Mutationen hier
};

// Aktionen definieren
const actions = {
   // Ihre Aktionen hier
};

// Store erstellen und exportieren
export default createStore({
   state,
   getters,
   mutations,
   actions,
   // Weitere Module können hier hinzugefügt werden
});
