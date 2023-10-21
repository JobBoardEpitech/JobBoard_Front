<template>
  <div class="w-full">
    <div class="py-8 px-4 mx-auto lg:py-16 w-[30vw]">
      <h2 class="mb-4 text-xl font-bold text-gray-900">Modify Users</h2>
      <form @submit.prevent="updateUserHandler">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="w-full">
            <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900">Firstname</label>
            <JobInput
                :value="values.firstName"
                id="firstname"
                type="text"
                autocomplete="given-name"
                placeholder="Firstname"
                @update:value="values.firstName = $event"
            />
          </div>
          <div class="w-full">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <JobInput
                :value="values.name"
                id="name"
                type="text"
                autocomplete="family-name"
                placeholder="Name"
                @update:value="values.name = $event"
            />
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <JobInput
                :value="values.email"
                id="email"
                type="email"
                autocomplete="email"
                placeholder="Email"
                @update:value="values.email = $event"
            />
            <div v-if="errors.email" class="text-red-500 mt-2">
              {{ errors.email }}
            </div>
          </div>
          <div>
            <label for="address" class="block mb-2 text-sm font-medium text-gray-900">Address</label>
            <JobInput
                :value="values.address"
                id="address"
                type="text"
                autocomplete="street-address"
                placeholder="Address"
                @update:value="values.address = $event"
            />
          </div>
          <div>
            <label for="phoneNumber" class="block mb-2 text-sm font-medium text-gray-900">Phone</label>
            <JobInput
                :value="values.phone"
                id="phoneNumber"
                type="tel"
                autocomplete="tel"
                placeholder="Phone number"
                @update:value="values.phone = $event"
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
import {useRoute, useRouter} from "vue-router";
import JobInput from "@/components/common/JobInput.vue";
import { onMounted, ref } from "vue";
import type { UserUpdate } from "@/services/users";
import { getUserById, updateUser } from "@/services/users";

const route = useRoute();
const router = useRouter();

const userId = route.params.userId;
const errors = ref({});

const values = ref<UserUpdate>({
  email: "",
  firstName: "",
  name: "",
  phone: "",
  address: "",
});

const updateUserHandler = async () => {
  try {
    const response = await updateUser(Number(userId), values.value);

    // Redirigez vers la page des utilisateurs avec un paramètre de requête pour afficher le popup
    router.push({ name: 'client-manager', query: { updated: 'true' } });
  } catch (error: any) {
    if (error.response && error.response.data.errors) {
      errors.value.email = "Erreur lors de la mise à jour de l'email.";
    }
  }
};

onMounted(async () => {
  try {
    const userData = await getUserById(Number(userId));
    values.value = {
      email: userData.email,
      firstName: userData.first_name,
      name: userData.name,
      phone: userData.phone,
      address: userData.address,
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des données utilisateur:', error);
  }
});
</script>


