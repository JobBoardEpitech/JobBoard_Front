<template>
  <head>
    <meta charset="UTF-8">
    <title>JobBoard Admin</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#121b2d] text-[#f3f5f9] font-inter flex items-center h-screen p-4 gap-4">

  <SideBar/>

  <companies-manager-card/>
  </body>
  <Footer/>
</template>
<script setup lang="ts">
import SideBar from "@/components/admin/sideBar/SideBar.vue";
import CompaniesManagerCard from "@/components/admin/cards/CompaniesManagerCard.vue";
</script>