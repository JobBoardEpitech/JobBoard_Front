<template>
  <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
  <link href='https://fonts.googleapis.com/css?family=Fredoka+One' rel='stylesheet'>

  <div class="min-h-screen flex flex-row bg-gray-100">
    <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
      <div class="flex items-center justify-center h-20 shadow-md">
        <a href="/" class="font-fredoka font-semibold flex items-center text-[#4341C0] text-2xl">
          JOBBOARD
        </a>
      </div>
      <ul class="flex flex-col py-4">
        <li>
          <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span>
            <span class="text-sm font-medium">Users</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-notepad"></i></span>
            <span class="text-sm font-medium">Advertisements</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-building-house"></i></span>
            <span class="text-sm font-medium">Companies</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
            <span class="text-sm font-medium">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup lang="ts">
</script>