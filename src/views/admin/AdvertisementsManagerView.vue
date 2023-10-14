<template>
  <div class="h-screen flex bg-[#f0f0f0]">
    <SideBar/>
    <AdvertisementsManagerCard
        :advertisements="advertisements"
    />
  </div>
</template>
<script setup lang="ts">
import {advertisements} from "@/services/advertisements";
import SideBar from "@/components/admin/sideBar/SideBar.vue";
import AdvertisementsManagerCard from "@/components/admin/cards/AdvertisementsManagerCard.vue";
</script>