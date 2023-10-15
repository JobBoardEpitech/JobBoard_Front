<template>
  <div class="h-screen flex bg-[#f0f0f0]">
    <SideBar/>
    <ModifyAdvertisementsCard
    />
  </div>

</template>
<script setup lang="ts">
import SideBar from "@/components/admin/sideBar/SideBar.vue";
import ModifyAdvertisementsCard from "@/components/admin/cards/ModifyAdvertisementsCard.vue";
</script>