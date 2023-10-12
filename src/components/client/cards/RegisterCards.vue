<template>
  <link href='https://fonts.googleapis.com/css?family=Fredoka+One' rel='stylesheet'>
  <div class="flex items-center justify-center mt-28">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <h2 class="font-fredoka font-semibold grid justify-items-center text-[#4341C0] text-4xl">
        JOBBOARD
      </h2>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <form class="space-y-6" action="#" method="POST">

          <div>
            <div class="mt-2">
              <input id="password" name="firstname" type="text" required class="border-indigo-600 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 pl-[14px] sm:text-sm sm:leading-6 " placeholder="Prénom">
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-fredoka font-thin leading-6 text-gray-900"></label>
            </div>
            <div class="mt-2">
              <input id="password" name="name" type="text" required class="border-indigo-600 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 pl-[14px] sm:text-sm sm:leading-6 " placeholder="Nom">
            </div>
          </div>


          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-fredoka font-thin leading-6 text-gray-900"></label>
            </div>
            <div class="mt-2">
              <input
                  id="phone-number"
                  v-model="userEnteredPhoneNumber"
                  @input="formatPhoneNumber"
                  name="phone-number"
                  type="tel"
                  required
                  class="border-indigo-600 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 pl-[14px] sm:text-sm sm:leading-6 "
                  placeholder="Numéro">
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-fredoka font-thin leading-6 text-gray-900"></label>
            </div>
            <div class="mt-2">
              <input id="password" name="email" type="email" required class="border-indigo-600 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 pl-[14px] sm:text-sm sm:leading-6 " placeholder="Email">
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-fredoka font-thin leading-6 text-gray-900"></label>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="border-indigo-600 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 pl-[14px] sm:text-sm sm:leading-6 " placeholder="Password">
            </div>
          </div>

          <div>
            <router-link  :to="{name: 'home'}" class="flex w-full justify-center rounded-full bg-[#4341C0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Créer un compte
            </router-link>
          </div>
        </form>
        <p class="mt-10 text-center text-sm text-gray-500">
          Vous avez déjà un compte ?
          <router-link :to="{name: 'login'}" class="font-semibold leading-6 text-[#4341C0] hover:text-indigo-500">
            Se connecter
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const rawPhoneNumber = ref<string>("");

const formatPhoneNumber = () => {
  let numbers = rawPhoneNumber.value.replace(/\D/g, "");
  numbers = numbers.substring(0, 10);
  const formatted = numbers.replace(/(\d{2})(?=\d)/g, "$1 ");
  rawPhoneNumber.value = formatted;
};

const userEnteredPhoneNumber = computed<string>({
  get: () => rawPhoneNumber.value,
  set: (value: string) => {
    rawPhoneNumber.value = value;
    formatPhoneNumber();
  }
});
</script>


