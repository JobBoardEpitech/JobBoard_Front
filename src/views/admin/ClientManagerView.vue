<template>
  <div class="h-screen flex bg-gray-200">
    <SideBar/>
    <UserClientCard
        :users="users"
    />
  </div>
</template>
<script setup lang="ts">
import SideBar from "@/components/admin/sideBar/SideBar.vue";
import UserClientCard from "@/components/admin/cards/UserClientCard.vue";
import {users} from "@/services/user";

</script>