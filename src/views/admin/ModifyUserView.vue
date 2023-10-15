<template>
  <div class="h-screen flex bg-[#f0f0f0]">
    <SideBar/>
    <UserModifyCard
    />
  </div>

</template>
<script setup lang="ts">
import SideBar from "@/components/admin/sideBar/SideBar.vue";
import UserModifyCard from "@/components/admin/cards/ModifyUserCard.vue";
</script>