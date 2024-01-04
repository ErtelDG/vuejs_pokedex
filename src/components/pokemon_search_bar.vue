<script setup lang="ts">
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
let searchPokemon = ref("");

let renderListPokemon = ref(false);
let pokemonNames = ref<any[]>([]);
let userFilterInput = ref<any[]>([]);
let searchTerm: string;

watch(searchPokemon, () => {
   searchTerm = searchPokemon.value.toLowerCase();
   console.log(searchTerm);
   console.log(pokemonNames.value);

   if (searchTerm != "") {
      userFilterInput.value = pokemonNames.value
         .filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm))
         .map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
         }));
      renderListPokemon.value = true;
   } else {
      renderListPokemon.value = false;
      userFilterInput.value = [];
   }
});

watch(
   () => store.state.localPokemonsData,
   () => {
      pokemonNames.value = Object.values(store.state.localPokemonsData).map((pokemon: any) => ({
         id: pokemon.pokemonId, // Annahme: Die Pokemon-ID ist im Datenobjekt als "pokemonID" gespeichert
         name: pokemon.pokemonName.charAt(0).toUpperCase() + pokemon.pokemonName.slice(1),
      }));
   }
);

function selectPokemon(name: number) {
   renderListPokemon.value = false;
   console.log(name);
   selectedBigPokemonCard(name);
   searchPokemon.value = "";
}

const selectedBigPokemonCard = (chooice: number) => {
   store.dispatch("selectedBigPokemonCard", chooice);
};
</script>

<template>
   <div name="pokemon-search-bar" class="flex gap-4 w-82 md:w-2/5 h-8 justify-center bg-white border border-solid border-gray-100 border-r-05rem shadow-sm">
      <div class="w-full h-full gap-2 flex items-center justify-center mx-2">
         <div class="w-4 h-4 flex justify-center items-center">
            <svg width="0.75rem" height="0.75rem" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M7.94492 7.3262L6.04814 5.42942C6.01221 5.39349 5.96533 5.37474 5.91534 5.37474H5.7091C6.20126 4.80445 6.49968 4.0623 6.49968 3.24984C6.49968 1.45462 5.04507 0 3.24984 0C1.45462 0 0 1.45462 0 3.24984C0 5.04507 1.45462 6.49968 3.24984 6.49968C4.0623 6.49968 4.80445 6.20126 5.37474 5.7091V5.91534C5.37474 5.96533 5.39505 6.01221 5.42942 6.04814L7.3262 7.94492C7.39964 8.01836 7.51838 8.01836 7.59182 7.94492L7.94492 7.59182C8.01836 7.51838 8.01836 7.39964 7.94492 7.3262ZM3.24984 5.74972C1.86866 5.74972 0.749963 4.63102 0.749963 3.24984C0.749963 1.86866 1.86866 0.749963 3.24984 0.749963C4.63102 0.749963 5.74972 1.86866 5.74972 3.24984C5.74972 4.63102 4.63102 5.74972 3.24984 5.74972Z"
                  fill="#666666"
               />
            </svg>
         </div>
         <!-- pokemon search -->
         <!--  @submit.prevent="showBigPokemonCardBySearch" -->
         <form autocomplete="off" action="" class="flex w-full h-full" id="searchPokemonForm">
            <div class="autocomplete w-full text-sm">
               <input v-model="searchPokemon" class="w-full h-full px-2 text-center" id="myInput" type="text" required placeholder="Search in all Pokemons." />
               <ul v-if="renderListPokemon" class="bg-white border border-solid border-gray-100 border-r-05rem shadow-sm border-l-2 rounded-r">
                  <li v-for="chooice in userFilterInput" class="p-2 hover:bg-gray-200 cursor-pointer" @click="() => selectPokemon(chooice.id)">
                     {{ chooice.name }}
                  </li>
               </ul>
            </div>
         </form>
      </div>
   </div>
</template>

<style scoped></style>
