<template>
  <div class="px-4 py-8 sm:px-8 w-full">
    <div class="flex flex-col overflow-y-hidden rounded-lg border h-full bg-white">
      <div class="overflow-x-auto flex-1">
        <table class="w-full">
          <thead class="sticky top-0">
          <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th class="px-5 py-3">ID</th>
            <th class="px-5 py-3">Full Name</th>
            <th class="px-5 py-3">User Role</th>
            <th class="px-5 py-3">Phone</th>
            <th class="px-5 py-3">Email</th>
            <th class="px-5 py-3">Address</th>
            <th class="px-5 py-3">Actions</th>
          </tr>
          </thead>
          <tbody class="text-gray-500">
          <tr
            v-for="user in props.users"
            :key="user.id"
          >
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">
                {{user.id}}
              </p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div class="flex items-center">
                  <router-link :to="{name: 'client-manager-modify'}" class="whitespace-no-wrap">
                    {{ `${user.firstName} ${user.name}` }}
                  </router-link>
              </div>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                {{user.user_role}}
              </span>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <a :href="`tel:${user.phone}`" class="whitespace-no-wrap">
                {{user.phone}}
              </a>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <a :href="`mailto:${user.email}`" class="whitespace-no-wrap">
                {{user.email}}
              </a>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">
                {{user.address}}
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
      <div class="flex flex-col items-center border-t px-5 pt-5 sm:flex-row sm:justify-between pb-2">
        <span class="text-xs text-gray-600 sm:text-sm pb-2"> Showing 1 to 5 of 12 Entries </span>
        <div class="mt-2 inline-flex sm:mt-0 pb-2">
          <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
          <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import type {PropType} from "vue";
import type {User} from "@/services/user";

// Props
const props = defineProps({
  users:{
    type: Array as PropType<User[]>
  }

})
</script>