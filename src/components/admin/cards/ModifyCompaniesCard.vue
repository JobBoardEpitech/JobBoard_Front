<template>
  <div class="w-full">
    <div class="py-8 px-4 mx-auto lg:py-16 w-[30vw]">
      <h2 class="mb-4 text-xl font-bold text-gray-900">Modify Company</h2>
      <form @submit.prevent="updateCompanyHandler">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <JobInput
                :value="values.name"
                id="name"
                type="text"
                autocomplete="family-name"
                required
                placeholder="Name"
                @update:value="values.name = $event"
            />
          </div>
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Description</label>
            <JobInput
                :value="values.description"
                rows="5"
                id="description"
                type="text"
                required
                placeholder="Description"
                @update:value="values.description = $event"
            />
          </div>
        </div>
        <button
            type="submit"
            class="flex font-semibold justify-center w-full mt-12 py-3 rounded-full text-center text-sm self-center bg-indigo-600 hover:bg-indigo-500 text-white"
        >
          Modify
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import JobInput from "@/components/common/JobInput.vue";
import { onMounted, ref } from "vue";
import type { Company } from "@/services/companies";
import CompaniesService from "@/services/companies";

const route = useRoute();
const router = useRouter();

const companyId = route.params.companyId;
const errors = ref({});

const values = ref({
  name: "",
  description: "",
});

const updateCompanyHandler = async () => {
  try {
    await CompaniesService.updateCompany(Number(companyId), {
      name: values.value.name,
      description: values.value.description,
    });

    router.push({ name: 'companies-manager', query: { updated: 'true' } });
  } catch (error: any) {
    console.error('Error updating company:', error);
    if (error.response && error.response.data.errors) {
      errors.value.general = "Erreur lors de la mise à jour de l'entreprise.";
    }
  }
};

onMounted(async () => {
  try {
    const companyData = await CompaniesService.getCompanyById(Number(companyId));
    values.value = {
      name: companyData.name,
      description: companyData.description,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données de l'entreprise:", error);
  }
});
</script>
