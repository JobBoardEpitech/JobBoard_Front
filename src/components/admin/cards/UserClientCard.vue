<template>
  <div class="px-4 py-8 sm:px-8 w-full">
    <div class="flex flex-col overflow-y-hidden rounded-lg border h-full bg-white">
      <div class="overflow-x-auto flex-1">
        <table class="w-full">
          <thead class="sticky top-0">
          <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th class="px-5 py-3">ID</th>
            <th class="px-5 py-3">Full Name</th>
            <th class="px-5 py-3">Users Role</th>
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
                <router-link
                    :to="{name: 'client-manager-modify',
                     params: { userId: user.id }}"
                    class="whitespace-no-wrap text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 font-semibold">
                {{ `${user.first_name} ${user.name}` }}
                </router-link>
              </div>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                {{findUserRoleById(user.role_id)?.name || ''}}
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
              <button @click="deleteUsers(user.id)" class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
                Delete
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
    <div v-if="showDeleteSuccessPopup" class="fixed top-4 right-4 z-50 p-4 bg-green-500 text-white rounded shadow-lg transform transition-all duration-300 ease-in-out">
      <button @click="closeDeleteSuccessPopup" class="absolute top-2 right-2 text-xl focus:outline-none">×</button>
      <p class="font-bold">Succès !</p>
      <p>Utilisateur supprimé avec succès.</p>
    </div>
    <div v-if="showUpdateSuccessPopup" class="fixed top-4 right-4 z-50 p-4 bg-green-500 text-white rounded shadow-lg transform transition-all duration-300 ease-in-out">
      <button @click="closeUpdateSuccessPopup" class="absolute top-2 right-2 text-xl focus:outline-none">×</button>
      <p class="font-bold">Succès !</p>
      <p>Utilisateur modifié avec succès.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import type { PropType } from 'vue';
import axios from "axios";
import type { Users } from "@/services/users";
import type {UserRole} from "@/services/userRoles";

// Props
const props = defineProps({
  users: {
    type: Array as PropType<Users[]>,
    required: true,
    default: () => []
  },
  roles: {
    type: Array as PropType<UserRole[]>,
    required: true,
    default: () => []
  }
});

/* HOOKS */
const router = useRouter();
const route = useRoute();

/* REFS */
const localUsers = ref([...props.users]);
const showDeleteSuccessPopup = ref(false);
const showUpdateSuccessPopup = ref(false);

/* methods */

const findUserRoleById = (userId: number): UserRole | null => {
  if(!props.roles) return null
  return props.roles.find((role: UserRole) => role.id === userId)
}
const closeDeleteSuccessPopup = () => {
  showDeleteSuccessPopup.value = false;
};

const closeUpdateSuccessPopup = () => {
  showUpdateSuccessPopup.value = false;
};

const deleteUsers = async (id: number) => {
  const isConfirmed = window.confirm('Are you sure you want to delete this user?');
  if (!isConfirmed) return;
  try {
    await axios.delete(`http://127.0.0.1:3333/api/users/${id}`);

    localUsers.value = localUsers.value.filter(ad => ad.id !== id);
    // Directly show the delete success popup here
    showDeleteSuccessPopup.value = true;
    setTimeout(() => {
      showDeleteSuccessPopup.value = false;
    }, 5000);
    router.push({ name: 'client-manager' });
  } catch (error: any) {
    console.error('Error deleting user:', error.response ? error.response.data : error.message);
  }
};


/*  LIFE CYCLE */
onMounted(() => {
  // Check if the query parameter updated is true to display the popup
  if (route.query.updated === 'true') {
    showUpdateSuccessPopup.value = true;
    setTimeout(() => {
      showUpdateSuccessPopup.value = false;
    }, 5000);
  }
});
</script>


