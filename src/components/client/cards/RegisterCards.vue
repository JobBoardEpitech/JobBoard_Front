<template>
  <link href='https://fonts.googleapis.com/css?family=Fredoka+One' rel='stylesheet'>
  <div class="flex items-center justify-center mt-28">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 sm:max-w-sm w-full">
      <h2 class="font-fredoka font-semibold grid justify-items-center text-[#4341C0] text-4xl">
        JOBBOARD
      </h2>
      <div class="mt-10 sm:mx-auto w-full">
        <form class="space-y-6" action="#" method="POST">
            <JobInput
                :value="values.firstname"
                id="firstname"
                type="text"
                required
                placeholder="Prénom"
                @update:value="values.firstname = $event"

            />

          <JobInput
              :value="values.name"
              id="name"
              type="text"
              required
              placeholder="Nom"
              @update:value="values.name = $event"

          />

          <JobInput
              :value="values.phoneNumber"
              :maxlength="14"
              id="phone-number"
              type="tel"
              required
              placeholder="Numéro"
              @update:value="onPhoneNumberInput"
          />

          <JobInput
              :value="values.email"
              id="email"
              type="email"
              autocomplete="email"
              required
              placeholder="Email"
              @update:value="values.email = $event"
          />

          <JobInput
              :value="values.password"
              id="password"
              type="password"
              autocomplete="current-password"
              required
              placeholder="Password"
              @update:value="values.password = $event"

          />

            <router-link  :to="{name: 'login'}" class="flex w-full justify-center rounded-full bg-[#4341C0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Créer un compte
            </router-link>

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
import {ref} from 'vue';
import JobInput from "@/components/common/JobInput.vue";

const values = ref({
  email:"",
  password:"",
  phoneNumber:"",
  name:"",
  firstname:""
})

//Methods

const onPhoneNumberInput = (phoneNumber: string) => {
  let numbers = phoneNumber.replace(/\D/g, "");
  numbers = numbers.substring(0, 10); // Limiter à 10 chiffres
  values.value.phoneNumber = numbers.replace(/(\d{2})(?=\d)/g, "$1 ");
};
</script>




