<script>
export default {
  name: "AuthSubmitButton",
  props: {
    text: String,
    isLoading: Boolean,
  },
  emits: ['submit'],
}

</script>

<template>
  <button type="submit" @click="$emit('submit')" :disabled="isLoading" :class="{ 'bg-indigo-400': isLoading}"
          class="cursor-pointer flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{text}}</button>
</template>

<style scoped>

</style>