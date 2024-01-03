<script setup lang="ts">
import start_animation from "./components/start_animation.vue";
import contain_for_big_pokemon_card from "./components/contain_for_big_pokemon_card.vue";
import all_pokemon_start_side from "./components/all_pokemon_start_side.vue";
import pokemonBaseData from "./assets/data/pokemonBaseData.json";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
   store.state.localPokemonsData = pokemonBaseData;
});
</script>

<template>
   <!-- contain for big pokemon card -->
   <contain_for_big_pokemon_card></contain_for_big_pokemon_card>

   <!-- main section -->
   <div id="renderMain" class="w-screen h-screen text-color-type-dark-gray">
      <!-- all pokemon start side background mobile -->
      <div
         name="background-all-pokemon-start-side-mobile"
         class="relative bg-all-pokemon-start-side-full flex flex-col items-center justify-center w-screen bg-color-type-background"
      >
         <!-- all pokemon start side  -->
         <all_pokemon_start_side></all_pokemon_start_side>

         <!-- <start_animation></start_animation> -->
      </div>
   </div>
</template>

<style scoped></style>
