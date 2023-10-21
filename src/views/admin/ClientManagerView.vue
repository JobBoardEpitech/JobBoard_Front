<template>
  <div class="h-screen flex bg-[#f0f0f0]">
    <SideBar/>
    <UserClientCard
        :users="users"
        :roles="roles"
    />
  </div>
</template>
<script setup lang="ts">
import SideBar from "@/components/admin/sideBar/SideBar.vue";
import {onMounted, ref} from "vue";
import type {Ref} from "vue";
import UserClientCard from "@/components/admin/cards/UserClientCard.vue";
import {fetchUsers} from "@/services/users";
import type {Users} from "@/services/users";
import UserRolesService from "@/services/userRoles";
import type {UserRole} from "@/services/userRoles";

const users: Ref<Users[]> = ref([]);
const roles: Ref<UserRole[]> = ref([]);

onMounted(async () => {
  try {
    users.value = await fetchUsers();
    roles.value = await UserRolesService.getUserRoles();
  } catch (error) {
    console.error("Erreur lors de la récupération des annonces:", error);
  }
});
</script>