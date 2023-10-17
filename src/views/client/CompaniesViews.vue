<template>
  <div :class="$attrs.class" @click="$emit('clickCard')">
    <div class="h-screen bg-[#F0F0F0] m-0 p-0">
      <NavBar/>
      <section class="flex-grow p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-4 items-start mx-auto max-w-screen-lg overflow-y-auto max-h-[832px]">
          <CompanyCards
              v-for="company in companies"
              :key="company.id"
              :name="company.name"
              :short_description="company.description"
              class="w-card h-card mt-8"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/client/navbar/NavBar.vue";
import { ref, onMounted } from "vue";
import type {Company} from "@/services/companies";
import CompaniesService from "@/services/companies";
import CompanyCards from "@/components/client/cards/CompanyCards.vue";


const companies = ref<Company[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    companies.value = await CompaniesService.fetchCompanies();
  } catch (error) {
    console.error("Erreur lors de la récupération des annonces:", error);
  } finally {
    isLoading.value = false;
  }
});


</script>