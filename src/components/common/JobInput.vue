<template>
  <div class="flex flex-col gap-2 relative">
    <label v-if="props.label" class="block text-sm font-fredoka font-thin leading-6 text-gray-900 font-medium" :for="id">
      {{ props.label }}
      <span v-if="props.required" class="text-red-400 ml-1"> * </span>
    </label>

    <textarea
        v-if="rows"
        :rows="rows"
        :id="props.id"
        :value="props.value"
        class="border-indigo-600 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 pl-[14px] sm:text-sm sm:leading-6"
        :placeholder="props.placeholder"
        :required="props.required"
        :autocomplete="props.autocomplete"
        @input="emit('update:value', $event.target.value, $event)"
    />
    <input
        v-else
        :type="typeRef"
        :id="props.id"
        :value="props.value"
        :min="props.min"
        class="border-indigo-600 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 pl-[14px] sm:text-sm sm:leading-6"
        :placeholder="props.placeholder"
        :required="props.required"
        :autocomplete="props.autocomplete"
        :maxlength="props.maxlength"
        :class="[
          typeRef === 'number' ? 'pr-3' : null
        ]"
        @input="emit('update:value', $event.target.value, $event)"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

/* PROPS */
const props = defineProps({
  placeholder: {type: String, default: null},
  value: {type: [String, Number], default: ''},
  rows: {type: Number, default: null},
  id: {type: String, default: 'field'},
  type: {type: String, default: 'text'},
  label: {type: String, default: null},
  min: {type: String, default: null},
  required: {type: Boolean, default: false},
  autocomplete: { type: String, default: null},
  maxlength: {type: Number, default: null}
})


/*EMIT*/
const emit = defineEmits(['update:value'])

/*REFS*/
const typeRef = ref(props.type)


</script>

<style scoped>
:focus-visible {
  outline: none;
}

</style>