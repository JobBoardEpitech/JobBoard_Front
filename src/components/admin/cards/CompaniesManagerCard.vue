<template>
  <div class="px-4 py-8 sm:px-8 w-full">
    <div class="flex flex-col overflow-y-hidden rounded-lg border h-full">
      <div class="overflow-x-auto flex-1">
        <table class="w-full">
          <thead class="sticky top-0">
          <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th class="px-5 py-3">ID</th>
            <th class="px-5 py-3">Name</th>
            <th class="px-5 py-3">Description</th>
            <th class="px-5 py-3">Actions</th>
          </tr>
          </thead>
          <tbody class="text-gray-500">
          <tr
              v-for="company in props.companies"
              :key="company.id"
          >
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">
                {{company.id}}
              </p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div class="flex items-center">
                <p class="whitespace-no-wrap">
                  {{ company.name }}
                </p>
              </div>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap truncate">
                {{ company.description }}
              </p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <button>
                D
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-col items-center border-t px-5 pt-5 sm:flex-row sm:justify-between">
        <span class="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
        <div class="mt-2 inline-flex sm:mt-0">
          <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
          <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import type {Company} from "@/services/companies";

const props = defineProps({
  companies: {
    type: Array as PropType<Company[]>
  }
})
</script>