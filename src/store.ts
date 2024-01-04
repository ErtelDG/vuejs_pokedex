import { createStore } from "vuex";
import { type Commit } from "vuex";

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
   url1: "https://pokeapi.co/api/v2/pokemon/",
   url2: "https://pokeapi.co/api/v2/pokemon-species/",
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
});