import { createStore } from "vuex";
import { type Commit } from "vuex";
import pokemonBaseData from "./assets/data/pokemonBaseData.json";

interface Pokemon {
   pokemonId: number;
   pokemonName: string;
   pokemonImage: string;
   pokemonType1: string;
   color: string;
   pokemonGeneration: string;
   pokemonWeight: number;
   pokemonHeight: number;
   pokemonAbilitie1: string;
   flavorPokemon: string;
   pokemonHP: number;
   pokemonAtk: number;
   pokemonDef: number;
   pokemonSatk: number;
   pokemonSdef: number;
   pokemonSpd: number;
   pokemonType2?: string;
   pokemonAbilitie2?: string;
   pokemonColor2?: string;
}

// define variables
const state = {
   currentGeneration: "generation-i",
   localPokemonsData: JSON,
   bigPokemonCard: 0,

   generations: [
      "generation-i",
      "generation-ii",
      "generation-iii",
      "generation-iv",
      "generation-v",
      "generation-vi",
      "generation-vii",
      "generation-viii",
      "generation-ix",
   ],
   currentPokemon: 1,
   intermediateValue: 181,
   maxPokemons: 905,
   generation1: {},
   generation2: {},
   generation3: {},
   generation4: {},
   generation5: {},
   generation6: {},
   generation7: {},
   generation8: {},
   generation9: {},
   searchAllPokemonsArray: [] as string[],
   type2: "undefined",
   abilities2: "undefined",
   color2: "undefined",
   url1: "https://pokeapi.co/api/v2/pokemon/",
   url2: "https://pokeapi.co/api/v2/pokemon-species/",
   url1responseCurrentPokemonAsJson: null,
   url2responseCurrentPokemonAsJson: null,
   found: true,
   counterRequestFailToApi: 0,

   containerRenderAllPokemonSmall: null, // Setze dies auf den gewünschten Standardwert
   pokemonsSearchId: null, // Setze dies auf den gewünschten Standardwert
   PokemonCard: null, // Setze dies auf den gewünschten Standardwert
   PokemonCardBaseData: null, // Setze dies auf den gewünschten Standardwert
   colorCodes: [
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
   ],
};

// Define getters, mutations, and actions
const getters = {
   /* ... */
};
const mutations = {
   updateCurrentGeneration(state: { currentGeneration: string }, newGeneration: string) {
      state.currentGeneration = newGeneration;
   },

   sortPokemons(state: { localPokemonsData: any }, sortBy: string) {
      const sortFunction = sortBy === "name" ? (a: any, b: any) => a.pokemonName.localeCompare(b.pokemonName) : (a: any, b: any) => a.pokemonId - b.pokemonId;
      state.localPokemonsData = Object.values(state.localPokemonsData).sort(sortFunction);
   },

   selectedBigPokemonCard(state: { bigPokemonCard: any }, chooice: number) {
      state.bigPokemonCard = chooice;
   },
};
const actions = {
   updateCurrentGeneration({ commit }: { commit: Commit }, newGeneration: string) {
      commit("updateCurrentGeneration", newGeneration);
   },
   sortPokemons({ commit }: { commit: Commit }, sortBy: string) {
      commit("sortPokemons", sortBy);
   },
   selectedBigPokemonCard({ commit }: { commit: Commit }, chooice: number) {
      commit("selectedBigPokemonCard", chooice);
   },
};

// Create and export store
export default createStore({
   state,
   getters,
   mutations,
   actions,
   // Additional modules can be added here
});

/* // global variable who need in the project for all and rendering!
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
 */
/* // pokemon class
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
} */

/* let colorCodes = [
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
]; */
