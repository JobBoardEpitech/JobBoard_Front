<template>
  <header class="bg-[#0d121c] h-[calc(100vh-40px)] py-8 px-4 flex flex-col justify-between items-start rounded-md w-52">
    <nav class="flex flex-col gap-8">
      <div class="group flex flex-col gap-4">
        <h3 class="font-semibold text-gray-400 tracking-wider uppercase text-sm">Groups</h3>
        <ul class="menu flex flex-col gap-2">
          <li class="menu-item flex gap-2 cursor-pointer py-1 px-2 rounded-l-md text-xs leading-5 h-[34px] text-white">
            <div class="icon flex justify-center items-center w-6 h-6 bg-blue-500 rounded">
              <i class="ti ti-user text-white text-base"></i>
            </div>
            <span>Client Manager</span>
          </li>
          <li class="menu-item flex gap-2 cursor-pointer py-1 px-2 rounded-l-md text-sm leading-5 h-[34px] text-white">
            <div class="icon flex justify-center items-center w-6 h-6 bg-yellow-500 rounded">
              <i class="ti ti-speakerphone text-white text-base"></i>
            </div>
            <span>Advertisements</span>
          </li>
          <li class="menu-item flex gap-2 cursor-pointer py-1 px-2 rounded-l-md text-sm leading-5 h-[34px] text-white">
            <div class="icon flex justify-center items-center w-6 h-6 bg-green-500 rounded">
              <i class="ti ti-package text-white text-base"></i>
            </div>
            <span>Companies</span>
          </li>
        </ul>
      </div>
      <div class="group flex flex-col gap-4">
        <h3 class="font-semibold text-gray-400 tracking-wider uppercase text-sm">About Me</h3>
        <ul class="menu flex flex-col gap-2">
          <li class="menu-item flex gap-2 cursor-pointer py-1 px-2 rounded-l-md text-xs leading-5 h-[34px] text-white">
            <div class="icon flex justify-center items-center w-6 h-6 bg-orange-500 rounded">
              <i class="ti ti-user text-white text-base"></i>
            </div>
            <span>My Account</span>
          </li>
          <li class="menu-item flex gap-2 cursor-pointer py-1 px-2 rounded-l-md text-sm leading-5 h-[34px] text-white">
            <div class="icon flex justify-center items-center w-6 h-6 bg-pink-500 rounded">
              <i class="ti ti-settings-filled text-white text-base"></i>
            </div>
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </nav>
    <div class="user flex gap-2 items-center w-full pt-4 border-t border-gray-700">
      <div class="avatar w-7 h-7 bg-cover rounded-full" style="background-image: url('https://i.pravatar.cc/300');"></div>
      <div class="info flex flex-col">
        <h6 class="text-sm text-white">Admin</h6>
        <span class="text-xs text-gray-400">@username</span>
      </div>
    </div>
  </header>

</template>


<script setup lang="ts">
</script>