<script>
export default {
  name: "PrimaryButton",
  props: {
    text: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
}
</script>

<template>
  <button type="button" @click="$emit('click')" :disabled="isLoading" class="cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{text}}</button>
</template>

<style scoped>

</style>