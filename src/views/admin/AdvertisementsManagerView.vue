<template>
  <div class="h-screen flex bg-[#f0f0f0]">
    <SideBar/>
    <AdvertisementsManagerCard
        :advertisements="advertisements"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import {fetchAdvertisements} from "@/services/advertisements";
import type { Advertisement } from "@/services/advertisements";
import AdvertisementsManagerCard from "@/components/admin/cards/AdvertisementsManagerCard.vue";
import SideBar from "@/components/admin/sideBar/SideBar.vue";
const advertisements: Ref<Advertisement[]> = ref([]);

onMounted(async () => {
  try {
    advertisements.value = await fetchAdvertisements();
  } catch (error) {
    console.error("Erreur lors de la récupération des annonces:", error);
  }
});
</script>