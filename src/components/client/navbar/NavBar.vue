<template>
  <link href='https://fonts.googleapis.com/css?family=Fredoka+One' rel='stylesheet'>
  <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      <a href="/" class="font-fredoka font-semibold flex items-center text-[#4341C0] text-4xl">
        JOBBOARD
      </a>
    <nav class="nav font-fredoka font-semibold text-4xl">
      <ul class="flex items-center gap-40">
        <li :class="getLinkClasses('advertisements')" class="p-4 border-b-2 border-[#4341C0] border-opacity-0 hover:border-opacity-100 hover:text-[#4341C0] duration-200 cursor-pointer">
          <router-link
              :to="{name: 'advertisements'}"
              role="button"
              active-class="border-opacity-100 text-[#4341C0]"
          >
            Emploi
          </router-link>
        </li>
        <li :class="getLinkClasses('companies')" class="p-4 border-b-2 border-[#4341C0] border-opacity-0 hover:border-opacity-100 hover:text-[#4341C0] duration-200 cursor-pointer">
          <router-link
              :to="{name: 'companies'}"
              role="button"
              active-class="border-opacity-100 text-[#4341C0]"
          >
            Recruteur
          </router-link>
        </li>
      </ul>
    </nav>
      <!-- BUTTON LOGIN  -->
      <router-link :to="{name: 'login'}" role="button" class="bg-[#4341C0] hover:bg-indigo-500 text-white font-fredoka py-2 px-4 rounded-3xl w-44 text-3xl text-center">
        LOGIN
      </router-link>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const getLinkClasses = (name: string) => {
  return {
    'border-opacity-100': route.name === name,
    'text-[#4341C0]': route.name === name,
  };
};
</script>