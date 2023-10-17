<template>
  <div class="h-screen flex bg-[#f0f0f0]">
    <SideBar/>
    <CompaniesManagerCard
        :companies="companies"
    />
  </div>

</template>
<script setup lang="ts">
import SideBar from "@/components/admin/sideBar/SideBar.vue";
import CompaniesManagerCard from "@/components/admin/cards/CompaniesManagerCard.vue";
import {onMounted, ref} from "vue";
import CompaniesService from "@/services/companies";

const companies = ref([]);

onMounted(async () => {
  try {
    companies.value = await CompaniesService.fetchCompanies();
  } catch (error) {
    console.error("Erreur lors de la récupération des annonces:", error);
  }
});
</script>