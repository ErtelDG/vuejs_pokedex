<script setup lang="ts">
import start_animation from "./components/start_animation.vue";
import pokemon_search_bar from "./components/pokemon_search_bar.vue";
import all_pokemon_generations from "./components/all_pokemon_generations.vue";
import all_pokemon_header from "./components/all_pokemon_header.vue";
import contain_for_big_pokemon_card from "./components/contain_for_big_pokemon_card.vue";
import render_pokemon_cards_small from "./components/render_pokemon_cards_small.vue";


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

         <start_animation></start_animation>
      </div>
   </div>
</template>

<style scoped></style>
