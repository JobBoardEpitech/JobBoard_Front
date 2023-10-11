<template>
  <div class="flex items-center justify-center mt-28">
  <div class="bg-white w-96 shadow-2xl rounded-2xl p-5">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <h2 class="font-fredoka font-semibold grid justify-items-center text-[#4341C0] text-4xl">
        JOBBOARD
      </h2>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-fredoka font-thin leading-6 text-gray-900">Email</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-fredoka font-thin leading-6 text-gray-900">Password</label>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div>
            <router-link :to="{ name: 'login' }">
            <button type="submit" class="flex w-full justify-center rounded-full bg-[#4341C0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Se connecter</button>
            </router-link>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Pas un membre?
          <a href="#" class="font-semibold leading-6 text-[#4341C0] hover:text-indigo-500">S'inscrire</a>
        </p>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">

</script>
