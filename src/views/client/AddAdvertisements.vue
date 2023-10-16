<template>
  <div class="h-screen bg-[#F0F0F0] overflow-hidden m-0 p-0">
    <NavBar/>
    <section class="flex flex-wrap justify-center gap-4 pt-8">
      <div class="grid gap-4 overflow-auto w-[50vw]">
        <AddAdvertisementsCard/>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/client/navbar/NavBar.vue";
import AddAdvertisementsCard from "@/components/client/cards/AddAdvertisementsCard.vue";
</script>