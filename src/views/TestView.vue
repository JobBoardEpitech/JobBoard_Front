<template>
  <JobInput
      :value="value"
      @update:value="value = $event"
  />
</template>

<script setup lang="ts">
import JobInput from "@/components/common/JobInput.vue";
import {ref} from "vue";

const value = ref("")
</script>