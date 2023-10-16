<template>
  <div class="px-4 py-8 sm:px-8 w-full ">
    <div class="flex flex-col overflow-y-hidden rounded-lg border h-full bg-white">
      <div class="overflow-x-auto flex-1">
        <div class="py-8 px-8 mx-auto">
          <h2 class="mb-4 text-2xl font-bold text-gray-900 flex justify-center pb-16">Ajouter une annonce</h2>
          <form action="#">
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="w-full">
                <label for="brand" class="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                <JobInput
                    :value="values.name"
                    id="name"
                    type="text"
                    autocomplete="given-name"
                    required
                    placeholder="Nom"
                    @update:value="values.name = $event"

                />
              </div>
              <div class="w-full">
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Type de contrat</label>
                <JobInput
                    :value="values.contractType"
                    id="contractType"
                    type="text"
                    autocomplete="text"
                    required
                    placeholder="Type de contrat"
                    @update:value="values.contractType = $event"

                />
              </div>
              <div class="sm:col-span-2">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                <JobInput
                    :value="values.description"
                    id="description"
                    rows="5"
                    type="text"
                    autocomplete="description"
                    required
                    placeholder="Description"
                    @update:value="values.description = $event"
                />
              </div>
              <div class="sm:col-span-2">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Short Description</label>
                <JobInput
                    :value="values.shortDescription"
                    id="shortDescription"
                    rows="3"
                    type="text"
                    autocomplete="shortDescription"
                    required
                    placeholder=" Short Description"
                    @update:value="values.shortDescription = $event"
                />
              </div>
            </div>
            <div class="flex justify-center gap-4">
              <button
                  type="submit"
                  class="flex font-semibold justify-center w-[10vw] mt-12 py-3 rounded-full text-center text-sm self-center bg-indigo-600 hover:bg-indigo-500 text-white">
                Ajouter
              </button>
              <router-link :to="{name: 'advertisements'}"
                  type="submit"
                  class="flex font-semibold justify-center w-[10vw] mt-12 py-3 rounded-full text-center text-sm self-center bg-indigo-600 hover:bg-indigo-500 text-white">
                Retour
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import JobInput from "@/components/common/JobInput.vue";
import {ref} from "vue";

const values = ref({
  name:"",
  description:"",
  shortDescription:"",
  contractType:""
})
</script>