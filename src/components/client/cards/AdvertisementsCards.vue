<template>
  <section @click="emit('clickCard')" class="flex flex-col cursor-pointer">
    <article
        :class="props.active ? 'border-indigo-600' : 'border-transparent'"
        class="bg-white flex flex-col w-full max-w-md p-6 border-2 hover:border-indigo-600 hover:shadow-2xl rounded-xl">
      <div class="flex items-start gap-3.5 mb-4">
        <img loading="lazy" src="src/assets/img/image5.png" class="w-12 h-12 object-cover object-center" alt=""/>
        <div class="flex flex-col flex-grow">
          <h2 class="text-black text-sm font-semibold">
            {{ props.name }}
          </h2>
          <p class="text-neutral-500 text-xs font-medium mt-2 line-clamp-2">
            {{ props.short_description }}
          </p>
        </div>
        <img loading="lazy" src="src/assets/img/image6.png" class="w-5 h-5" alt="Icon" />
      </div>
      <Badge>
        {{ props.contract_type }}
      </Badge>
    </article>
  </section>
</template>

<script setup lang="ts">
import Badge from "@/components/client/badge/Badge.vue";

// Define the props
const props = defineProps({
  id: Number,
  name: String,
  short_description: String,
  contract_type: String,
  active: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['clickCard']);
</script>
