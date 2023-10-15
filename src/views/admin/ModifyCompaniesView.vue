<template>
  <div class="h-screen flex bg-[#f0f0f0]">
    <SideBar/>
    <ModifyCompaniesCard
    />
  </div>

</template>
<script setup lang="ts">
import SideBar from "@/components/admin/sideBar/SideBar.vue";
import ModifyCompaniesCard from "@/components/admin/cards/ModifyCompaniesCard.vue";
</script>