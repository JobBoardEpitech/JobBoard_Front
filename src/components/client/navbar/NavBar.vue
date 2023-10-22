<template>
  <link href='https://fonts.googleapis.com/css?family=Fredoka+One' rel='stylesheet'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.0.9/css/boxicons.min.css">
  <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      <a href="/" class="font-fredoka font-semibold flex items-center text-[#4341C0] text-4xl">
        JOBBOARD
      </a>
    <nav class="nav font-fredoka font-semibold text-4xl">
      <ul class="flex items-center gap-20 ml-32">
        <li class="p-4 border-b-2 border-[#4341C0] border-opacity-0">
          <router-link
              :to="{name: 'advertisements'}"
              role="button"
              :class="getLinkClasses('advertisements')" class="p-3.5 border-b-2 border-[#4341C0] border-opacity-0 hover:border-opacity-100 hover:text-[#4341C0] duration-200 cursor-pointer"
              active-class="border-opacity-100 text-[#4341C0]"
          >
            Emploi
          </router-link>
        </li>
        <li class="p-4 border-b-2 border-[#4341C0] border-opacity-0">
          <router-link
              :to="{name: 'companies'}"
              role="button"
              :class="getLinkClasses('companies')" class="p-3.5 border-b-2 border-[#4341C0] border-opacity-0 hover:border-opacity-100 hover:text-[#4341C0] duration-200 cursor-pointer"
              active-class="border-opacity-100 text-[#4341C0]"

          >
            Recruteur
          </router-link>
        </li>
      </ul>

    </nav>
      <!-- BUTTON LOGIN  -->
    <div class="flex justify-end gap-4">
      <router-link
          v-if="isRecruiter"
          :to="{name: 'add-advertisements'}"
          role="button"
          class="bg-[#4341C0] hover:bg-indigo-500 text-white font-fredoka py-2 px-4 rounded-3xl w-[14vw] text-xl text-center inline-flex items-center justify-center gap-2">
        <i class="bx bx-plus"></i>
        Ajouter une annonce
      </router-link>
      <button
          @click="handleLogout"
          class="bg-[#4341C0] hover:bg-indigo-500 text-white font-fredoka py-2 px-4 rounded-3xl w-44 text-xl text-center"
      >
        LOGOUT
      </button>

    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { logout } from "@/services/auth";
import router from "@/router";
import type {Users} from "@/services/users";

const route = useRoute();

const getLinkClasses = (name: string) => {
  return {
    'border-opacity-100': route.name === name,
    'text-[#4341C0]': route.name === name,
  };
};

const handleLogout = async () => {
  try {
    const token = localStorage.getItem('auth_token');
    if (token) {
      await logout(token);
    }
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
  } finally {
    localStorage.removeItem('auth_token');
    await router.push({name: 'login'});
  }
};

console.log("Contenu de user_info:", localStorage.getItem('user_info'));

let userInfo = {} as Users;
const rawUserInfo = localStorage.getItem('user_info');

if (rawUserInfo && rawUserInfo.trim().startsWith('{')) {
  try {
    userInfo = JSON.parse(rawUserInfo);
  } catch (error) {
    console.error("Erreur lors de la conversion de user_info en objet:", error);
  }
}

const userRole = userInfo.role_id || null;
const isRecruiter = userRole === 3;

</script>
