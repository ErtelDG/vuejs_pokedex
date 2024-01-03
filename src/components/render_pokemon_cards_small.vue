<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
let currentGenerationPokemon = ref<null | any[]>(null);
let currentGenerationSelected = "generation-i";
let observeStoreCurrentSelectedGen = ref(computed(() => store.state.currentGeneration));

// Watcher-Funktion
watch(
   () => store.state.localPokemonsData,
   () => {
      currentGenerationPokemon.value = Object.values(store.state.localPokemonsData).filter(
         (pokemon: any) => pokemon.pokemonGeneration === currentGenerationSelected
      );
   }
);
watch(observeStoreCurrentSelectedGen, () => {
   currentGenerationSelected = observeStoreCurrentSelectedGen.value;
   currentGenerationPokemon.value = Object.values(store.state.localPokemonsData).filter(
      (pokemon: any) => pokemon.pokemonGeneration === currentGenerationSelected
   );
});
</script>

<template>
   <div id="renderAllPokemonSmall" class="renderAllPokemonSmall">
      <!-- class="h-full flex wrap justify-center gap colum-gap-inherit row-gap-inherit overflow-x-hidden"> -->
      <!-- class="w-82 md:w-full md:px-4 h-96 md:h-full flex wrap justify-around overflow-x-hidden" -->
      <div
         v-for="(pokemon, index) in currentGenerationPokemon"
         :name="`${pokemon.pokemonGeneration}-show-pokemon-card`"
         :id="`${pokemon.pokemonId}`"
         :onclick="`showBigPokemonCard(${pokemon.pokemonId})`"
         class="flex flex-col w-26 h-28 my-2 mx-2 bg-white border border-solid border-r-05rem shadow-s cursor-pointer"
         :style="`border-color: ${pokemon.color}`"
      >
         <div name="pokemon-number" class="w-full h-4 flex justify-end">
            <div name="number-text" class="font-normal text-xxs flex justify-center text-right px-1" :style="`color:${pokemon.color}`">
               {{ pokemon.pokemonId }}
            </div>
         </div>
         <div name="pokemon-image" class="flex justify-center w-full h-18"><img class="w-18 h-18" name="poke-img" :src="`${pokemon.pokemonImage}`" /></div>

         <div
            name="pokemon-name"
            class="w-full h-full flex text-white justify-center items-center text-center border-r-bottom-05rem"
            :style="`background-color:${pokemon.color}`"
         >
            <div name="name-text" class="font-normal text-xxs flex items-center text-center">
               {{ pokemon.pokemonName.charAt(0).toUpperCase() + pokemon.pokemonName.slice(1) }}
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
