<template>
  <link href='https://fonts.googleapis.com/css?family=Fredoka+One' rel='stylesheet'>
  <div class="flex items-center justify-center mt-28">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 sm:max-w-sm w-full">
      <h2 class="font-fredoka font-semibold grid justify-items-center text-[#4341C0] text-4xl">
        JOBBOARD
      </h2>
      <div class="mt-10 sm:mx-auto w-full">

        <form class="space-y-6" @submit.prevent="handleSubmit">
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
          <div>
            <button type="submit" class="flex w-full justify-center rounded-full bg-[#4341C0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Se connecter</button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Pas de compte ?
          <router-link :to="{name: 'registration'}" class="font-semibold leading-6 text-[#4341C0] hover:text-indigo-500">
            Créez-en un
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import JobInput from "@/components/common/JobInput.vue";
import { login } from '@/services/auth';
import router from "@/router";

export default {
  components: {
    JobInput,
  },
  setup() {
    const values = ref({
      email: "",
      password: "",
      errorMessage: ""
    });

    const handleSubmit = async () => {
      try {
        const data = await login(values.value);
        localStorage.setItem('auth_token', data.token);
        await router.push('/');
      } catch (error) {
        values.value.errorMessage = 'Erreur de connexion. Vérifiez vos identifiants.';
      }
    };

    return {
      values,
      handleSubmit,
    };
  }
};
</script>

