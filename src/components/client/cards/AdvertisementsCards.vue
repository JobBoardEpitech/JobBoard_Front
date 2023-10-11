<template>
  <section
      @click="emit('clickCard')"
      class="flex flex-col ml-12 cursor-pointer">
    <article class="bg-white flex w-[394px] max-w-full h-[155px] grow flex-col pt-6 pb-10 px-5 rounded-xl border-2 border-transparent
    hover:border-indigo-600 hover:shadow-2xl">
      <div class="flex w-[297px] max-w-full items-start gap-3.5 ml-1.5 mb-10">
        <img loading="lazy" src="src/assets/img/image5.png" class="aspect-square object-cover object-center w-[49px] h-[49px] shrink-0 mt-2"  alt=""/>
        <div class="flex flex-col">
          <h2 class="text-black text-sm font-semibold w-[229px] h-[19px]">
            {{props.jobTitle}}
          </h2>
          <p class="text-neutral-500 text-xs font-medium w-[239px] h-[31px] mt-2 line-clamp-2">
            {{props.shortDescription}}
          </p>
        </div>
        <img loading="lazy" src="src/assets/img/image6.png" class="aspect-square object-cover object-center w-5 h-5 shrink-0 mt-0.5" alt="Icon" />
      </div>
      <Badge>
        {{props.contractType}}
      </Badge>
    </article>
  </section>
</template>

<script setup lang="ts">
import Badge from "@/components/client/badge/Badge.vue";

// Props
const props = defineProps({
  jobTitle: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  contractType: {
    type: String,
    required: true
  },
})

// EMIT
const emit = defineEmits(['clickCard'])
</script>
