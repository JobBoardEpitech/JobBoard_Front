<template>
  <div class="w-full">
  <div class="py-8 px-4 mx-auto lg:py-16 w-[30vw]">
    <h2 class="mb-4 text-xl font-bold text-gray-900">Modify User</h2>
    <form action="#">
      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div class="w-full">
          <label for="brand" class="block mb-2 text-sm font-medium text-gray-900">Firstname</label>
          <JobInput
              :value="values.firstname"
              id="firstname"
              type="text"
              autocomplete="given-name"
              required
              placeholder="Firstname"
              @update:value="values.firstname = $event"

          />
        </div>
        <div class="w-full">
          <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
          <JobInput
              :value="values.name"
              id="name"
              type="text"
              autocomplete="family-name"
              required
              placeholder="Name"
              @update:value="values.name = $event"

          />
        </div>
        <div class="sm:col-span-2">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <JobInput
              :value="values.email"
              id="email"
              type="email"
              autocomplete="email"
              required
              placeholder="Email"
              @update:value="values.email = $event"
          />
        </div>
        <div class="w-full">
          <label for="brand" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <JobInput
              :value="values.password"
              id="password"
              type="password"
              autocomplete="current-password"
              required
              placeholder="Password"
              @update:value="values.password = $event"

          />
        </div>
        <div class="w-full">
          <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
          <JobInput
              :value="values.password"
              id="password"
              type="password"
              autocomplete="current-password"
              required
              placeholder="Password"
              @update:value="values.password = $event"

          />
        </div>
        <div>
          <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Address</label>
          <JobInput
              :value="values.address"
              id="address"
              type="text"
              autocomplete="street-address"
              required
              placeholder="Address"
              @update:value="values.address = $event"
          />
        </div>
        <div>
          <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900">Phone</label>
          <JobInput
              :value="values.phoneNumber"
              id="phoneNumber"
              type="tel"
              autocomplete="tel"
              required
              placeholder="Phone number"
              @update:value="values.phoneNumber = $event"
          />
        </div>
      </div>
      <button
          type="submit"
          class="flex font-semibold justify-center w-full mt-12 py-3 rounded-full text-center text-sm self-center bg-indigo-600 hover:bg-indigo-500 text-white">
        Modify
      </button>
    </form>
  </div>
  </div>
</template>

<script setup lang="ts">
import JobInput from "@/components/common/JobInput.vue";
import {ref} from "vue";


const values = ref({
  email:"",
  password:"",
  phoneNumber:"",
  name:"",
  firstname:"",
  address:""
})
</script>