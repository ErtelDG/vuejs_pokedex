<script setup lang="ts"></script>

<template>
   <div name="all-pokemon-generations" class="w-82 md:w-2/5 h-14 md:h-16 border border-solid border-gray-100 border-r-05rem bg-white shadow-sm">
      <div name="generations" class="w-full h-75 md:h-7 font-semibold text-base text-center text-color-type-dark-gray border-b-2">Generation</div>
      <div name="gen-I-IX" class="w-full h-7 md:h-9 flex text-center">
         <div
            id="renderGenerationBtn1"
            class="w-full flex items-center justify-center font-semibold text-sm h-full border-r cursor-pointer rounded-bl bg-gray-200 hover:bg-gray-200"
            onclick="renderSmallPokemonCard(1)"
         >
            I
         </div>
         <div
            id="renderGenerationBtn2"
            class="w-full flex items-center justify-center font-semibold text-sm h-full border-r cursor-pointer hover:bg-gray-200"
            onclick="renderSmallPokemonCard(2)"
         >
            II
         </div>
         <div
            id="renderGenerationBtn3"
            class="w-full flex items-center justify-center font-semibold text-sm h-full border-r cursor-pointer hover:bg-gray-200"
            onclick="renderSmallPokemonCard(3)"
         >
            III
         </div>
         <div
            id="renderGenerationBtn4"
            class="w-full flex items-center justify-center font-semibold text-sm h-full border-r cursor-pointer hover:bg-gray-200"
            onclick="renderSmallPokemonCard(4)"
         >
            IV
         </div>
         <div
            id="renderGenerationBtn5"
            class="w-full flex items-center justify-center font-semibold text-sm h-full border-r cursor-pointer hover:bg-gray-200"
            onclick="renderSmallPokemonCard(5)"
         >
            V
         </div>
         <div
            id="renderGenerationBtn6"
            class="w-full flex items-center justify-center font-semibold text-sm h-full border-r cursor-pointer hover:bg-gray-200"
            onclick="renderSmallPokemonCard(6)"
         >
            VI
         </div>
         <div
            id="renderGenerationBtn7"
            class="w-full flex items-center justify-center font-semibold text-sm h-full border-r cursor-pointer hover:bg-gray-200"
            onclick="renderSmallPokemonCard(7)"
         >
            VII
         </div>
         <div
            id="renderGenerationBtn8"
            class="w-full flex items-center justify-center font-semibold text-sm h-full border-r cursor-pointer hover:bg-gray-200"
            onclick="renderSmallPokemonCard(8)"
         >
            VIII
         </div>
         <div
            id="renderGenerationBtn9"
            class="w-full flex items-center justify-center font-semibold text-sm h-full cursor-pointer rounded-br hover:bg-gray-200"
            onclick="alert('Generation 9 is not yet released. Release: Pokémon Karmesin and Crimson will be released on November 18, 2022!')"
         >
            IX
         </div>
      </div>
   </div>
</template>

<style scoped></style>
