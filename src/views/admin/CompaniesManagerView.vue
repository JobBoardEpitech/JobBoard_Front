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
import {companies} from "@/services/companies";
import CompaniesManagerCard from "@/components/admin/cards/CompaniesManagerCard.vue";
</script>