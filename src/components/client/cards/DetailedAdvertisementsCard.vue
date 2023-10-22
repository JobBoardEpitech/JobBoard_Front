<template>
  <div class="flex flex-col">
    <section class="bg-white flex flex-col w-full max-w-full p-5 rounded-xl">
      <header class="flex w-full items-start justify-between gap-4 flex-wrap">
        <img loading="lazy" src="src/assets/img/image5.png" class="object-cover object-center w-12" alt=""/>
        <div class="flex flex-col mt-1">
          <h1 class="text-black text-lg font-semibold w-full md:w-96 mt-2">
            {{props.name}}
          </h1>
        </div>
        <img loading="lazy" src="src/assets/img/image6.png" class="object-cover object-center w-5 mt-2" alt=""/>
      </header>
      <h2 class="text-black text-sm font-semibold w-full md:w-64 mt-14">Aperçu du projet</h2>
      <p class="text-neutral-500 text-xs font-medium w-full md:w-96 mt-3">
        {{props.long_description}}
      </p>
      <h2 class="text-black text-sm font-semibold w-full md:w-64 mt-7">Type de Contrat</h2>
      <Badge class="mt-2">
        {{props.contract_type}}
      </Badge>
      <button
          :disabled="props.userAlreadyApplied"
          :class="props.userAlreadyApplied ? 'bg-indigo-200 text-gray-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 text-white'"
          class="flex font-semibold justify-center w-[12rem] md:max-w-[12rem] mt-12 px-5 py-3 rounded-full text-center text-sm self-center"
          @click="handleAppliedJob"
      >
        {{props.userAlreadyApplied ? "Vous avez déjà postulé" : "Postuler"}}
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import Badge from "@/components/client/badge/Badge.vue";
import ApplyJobsService from "@/services/applyJobs";
import type {Users} from "@/services/users";

// Define the props
const props = defineProps({
  id: Number,
  name: String,
  long_description: String,
  contract_type: String,
  userAlreadyApplied: Boolean
});

/* EMIT */
const emit = defineEmits(['userAppliedJob'])

/* METHODS */
const handleAppliedJob = async () => {
  const user: Users | undefined = JSON.parse(localStorage.getItem('user_info'))
  const userId: number | undefined = user?.id

  if (!props.userAlreadyApplied && props.id && userId) {
    await ApplyJobsService.create({
      user_id: userId,
      advertisement_id: props.id
    })

    emit('userAppliedJob')
  }
}
</script>