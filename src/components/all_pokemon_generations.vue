<script setup lang="ts">
import { computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

let currentGeneration = computed(() => store.state.currentGeneration);

const extractValueAfterHyphen = (generation: string) => {
   const parts = generation.split("-");
   return parts[1].toUpperCase();
};

const changeCurrentGeneration = (generation: any) => {
   store.dispatch("updateCurrentGeneration", generation);
};
</script>

<template>
   <div name="all-pokemon-generations" class="w-82 md:w-2/5 h-14 md:h-16 border border-solid border-gray-100 border-r-05rem bg-white shadow-sm">
      <div name="generations" class="w-full h-75 md:h-7 font-semibold text-base text-center text-color-type-dark-gray border-b-2">Generation</div>
      <div name="gen-I-IX" class="w-full h-7 md:h-9 flex text-center">
         <div
            v-for="gen in store.state.generations"
            id="renderGenerationBtn1"
            class="w-full flex items-center justify-center font-semibold text-sm h-full border-r cursor-pointer rounded-bl hover:bg-gray-200"
            :class="{ 'bg-gray-200': gen === currentGeneration }"
            @click="changeCurrentGeneration(gen)"
         >
            {{ extractValueAfterHyphen(gen) }}
         </div>
      </div>
   </div>
</template>

<style scoped></style>
