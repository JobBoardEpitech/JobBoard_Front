<template>
  <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
  <link href='https://fonts.googleapis.com/css?family=Fredoka+One' rel='stylesheet'>

    <div class="flex flex-col w-56 bg-white overflow-hidden h-screen">
      <div class="flex items-center justify-center h-20 shadow-md">
        <a href="/" class="font-fredoka font-semibold flex items-center text-[#4341C0] text-2xl">
          JOBBOARD
        </a>
      </div>
      <ul class="flex flex-col py-4">
        <li :class="getLinkClasses('client-manager')" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-[#4341C0]">
          <router-link
              :to="{name: 'client-manager'}"
              role="button"
              active-class="border-opacity-100 text-[#4341C0]"
              >
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span>
            <span class="text-sm font-medium">Users</span>
          </router-link>
        </li>
          <li :class="getLinkClasses('client-manager')" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-[#4341C0]">
            <router-link
                :to="{name: 'advertisements-manager'}"
                role="button"
                active-class="border-opacity-100 text-[#4341C0]"
            >
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-notepad"></i></span>
            <span class="text-sm font-medium">Advertisements</span>
          </router-link>
        </li>
        <li :class="getLinkClasses('client-manager')" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-[#4341C0]">
          <router-link
              :to="{name: 'companies-manager'}"
              role="button"
              active-class="border-opacity-100 text-[#4341C0]"
          >
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-building-house"></i></span>
            <span class="text-sm font-medium">Companies</span>
          </router-link>
        </li>
        <li>
          <button
              @click="handleLogout"
              role="button" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-[#4341C0]">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
            <span class="text-sm font-medium">Logout</span>
          </button>
        </li>
      </ul>
    </div>
</template>

<script setup lang="ts">

import {useRoute} from "vue-router";
import {logout} from "@/services/auth";
import router from "@/router";

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
</script>