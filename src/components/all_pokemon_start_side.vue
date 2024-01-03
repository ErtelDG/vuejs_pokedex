<script setup lang="ts">
import pokemon_search_bar from "../components/pokemon_search_bar.vue";
import all_pokemon_generations from "../components/all_pokemon_generations.vue";
import all_pokemon_header from "../components/all_pokemon_header.vue";
import render_pokemon_cards_small from "../components/render_pokemon_cards_small.vue";
</script>

<template>
   <div
      id="all-pokemon-start-side"
      name="all-pokemon-start-side"
      class="w-screen sm:w-11/12 2xl:w-4/6 h-full sm:my-4 bg-color-type-background sm:border sm:border-solid sm:border-gray-300 border-r-075rem gap-2 flex flex-col items-center md:gap-y-6 sm:fixed sm:top-4 sm:bottom-4 h-initial"
   >
      <div class="w-full flex flex-col items-center gap-4 bg-color-type-background border-r-075rem">
         <!-- all pokemon header-->
         <all_pokemon_header></all_pokemon_header>

         <!-- all pokemon generations -->
         <all_pokemon_generations></all_pokemon_generations>

         <!-- pokemon search bar -->
         <pokemon_search_bar></pokemon_search_bar>

         <div class="w-full h-2 md:h-3 border-b-2"></div>
      </div>

      <!-- render pokemon cards small -->
      <render_pokemon_cards_small></render_pokemon_cards_small>
   </div>
</template>

<style scoped></style>
