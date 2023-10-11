<template>
  <div id="container" class="bg-[#0d121c] text-center rounded-lg mx-auto my-20 w-[calc(90vw-40px)] flex items-center justify-center">
    <div class="overflow-hidden rounded-lg shadow-md m-5 w-[calc(90vw-60px)] h-[calc(100vh-80px)]">
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">State</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Role</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Team</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
        <!--  LIST      -->
        </tbody>
      </table>
      <pagination-manager/>
    </div>
  </div>
</template>

<script setup lang="ts">

import PaginationManager from "@/components/admin/pagination/PaginationManager.vue";
</script>