<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();

const sortPokemons = (sortBy: string) => {
   store.dispatch("sortPokemons", sortBy);
};
</script>

<template>
   <div name="header-pokedex" class="flex flex-row mt-4 mx-4 py-0 px-0 gap-4 w-82 md:w-2/5 h-8">
      <div name="icon-pokeball" class="w-8 h-8 flex justify-center items-center">
         <img class="object-center" src="../assets/img/Pokeball-Icon.png" alt="" />
      </div>
      <div name="headline-pokedex-start-side" class="font-bold text-2xl w-full flex items-center justify-center text-center text-color-type-dark-gray">
         Pokédex
      </div>
      <div id="sortId">
         <div
            name="sort-id"
            id="sortIdInline"
            class="flex items-center border px-2 py-2 w-8 h-8 rounded-md cursor-pointer hover:bg-gray-200"
            @click="sortPokemons('name')"
         >
            <div class="font-semibold text-xxs text-line-xxs text-center text-color-type-dark-gray w-2 h-full flex justify-center items-center">A Z</div>
            <div class="h-8 w-8 flex justify-center items-center">
               <svg width="1rem" height="1rem" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M9.01733 11.1082L8.76483 10.8557C8.59747 10.6883 8.32611 10.6883 8.15872 10.8557L5.17857 13.8531V0.428572C5.17857 0.191893 4.98668 0 4.75 0H4.39285C4.15617 0 3.96428 0.191893 3.96428 0.428572V13.8531L0.984128 10.8557C0.81677 10.6883 0.545412 10.6883 0.378019 10.8557L0.125518 11.1082C-0.0418394 11.2756 -0.0418394 11.5469 0.125518 11.7143L4.26839 15.8745C4.43575 16.0418 4.7071 16.0418 4.8745 15.8745L9.01737 11.7143C9.18472 11.5469 9.18472 11.2756 9.01733 11.1082V11.1082Z"
                     fill="#212121"
                  />
               </svg>
            </div>
         </div>
      </div>
      <div id="sortBtnAZ">
         <div
            name="sort-a-z"
            id="sortBtnAzInline"
            class="flex items-center px-2 py-2 w-8 h-8 border rounded-md cursor-pointer hover:bg-gray-200"
            @click="sortPokemons('id')"
         >
            <div class="font-semibold text-xxs text-line-xxs text-center text-color-type-dark-gray w-2 h-full flex justify-center items-center">I D</div>
            <div class="h-8 w-8 flex justify-center items-center">
               <svg width="1rem" height="1rem" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M9.01733 11.1082L8.76483 10.8557C8.59747 10.6883 8.32611 10.6883 8.15872 10.8557L5.17857 13.8531V0.428572C5.17857 0.191893 4.98668 0 4.75 0H4.39285C4.15617 0 3.96428 0.191893 3.96428 0.428572V13.8531L0.984128 10.8557C0.81677 10.6883 0.545412 10.6883 0.378019 10.8557L0.125518 11.1082C-0.0418394 11.2756 -0.0418394 11.5469 0.125518 11.7143L4.26839 15.8745C4.43575 16.0418 4.7071 16.0418 4.8745 15.8745L9.01737 11.7143C9.18472 11.5469 9.18472 11.2756 9.01733 11.1082V11.1082Z"
                     fill="#212121"
                  />
               </svg>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
