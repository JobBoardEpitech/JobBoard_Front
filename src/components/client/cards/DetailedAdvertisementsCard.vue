<template>
  <div
      class="flex flex-col">
    <section class="bg-white flex w-[552px] max-w-full grow flex-col mt-24 pl-5 pr-5 pt-7 pb-10 rounded-xl ml-24">
      <header class="flex w-[498px] max-w-full items-start justify-between gap-4 max-md:flex-wrap max-md:justify-center">
        <img loading="lazy" src="src/assets/img/image5.png" class="aspect-square object-cover object-center w-[49px] shrink-0"  alt=""/>
        <div class="flex flex-col mt-1">
          <div class="text-neutral-500 text-xs font-semibold w-[229px]">
            {{props.companyName}}
          </div>
          <h1 class="text-black text-lg font-semibold w-[379px] mt-2">
            {{props.jobTitle}}
          </h1>
        </div>
        <img loading="lazy" src="src/assets/img/image6.png" class="aspect-square object-cover object-center w-5 shrink-0 mt-2"  alt=""/>
      </header>
      <h2 class="text-black text-sm font-semibold w-[229px] mt-14">Aperçu du projet</h2>
      <p class="text-neutral-500 text-xs font-medium max-w-[475px] mt-3 max-md:max-w-full">
        {{props.longDescription}}
      </p>
      <h2 class="text-black text-sm font-semibold w-[229px] mt-7">Type de Contrat</h2>
      <Badge class="mt-2">
        {{props.contractType}}
      </Badge>
      <div class="flex max-w-full items-start justify-between gap-5">
        <button
            :disabled="props.hasUserApplied"
            type="submit"
            :class="hasUserApplied ? 'bg-indigo-200 text-gray-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 text-white'"
            class="flex font-semibold max-w-[250px] grow flex-col mt-12 px-5 py-3 rounded-full text-center text-sm self-center">
          {{props.hasUserApplied ? "Vous avez deja postulé" : "Postuler"}}
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

import Badge from "@/components/client/badge/Badge.vue";

// Props
const props = defineProps({
  companyName: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  contractType: {
    type: String,
    required: true
  },
  hasUserApplied: {
    type: Boolean,
    required: true,
    default: false,
  }
})


</script>