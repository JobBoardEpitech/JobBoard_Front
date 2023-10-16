<template>
  <div class="w-full">
    <div class="py-8 px-4 mx-auto lg:py-16 w-[30vw]">
      <h2 class="mb-4 text-xl font-bold text-gray-900">Modify Advertisements</h2>
      <form action="#">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <JobInput
                :value="values.name"
                id="name"
                type="text"
                autocomplete="name"
                required
                placeholder="Name"
                @update:value="values.name = $event"
            />
          </div>
          <div>
            <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900">Contract Type</label>
            <JobInput
                :value="values.contractType"
                id="contractType"
                type="text"
                autocomplete="contractType"
                required
                placeholder="Contract Type"
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
        <button
            type="submit"
            class="flex font-semibold justify-center w-full mt-12 py-3 rounded-full text-center text-sm self-center bg-indigo-600 hover:bg-indigo-500 text-white">
          Modify
        </button>
      </form>
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