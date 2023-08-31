<template>
  <div class="bg-white rounded border-gray-300 border-[2px] mx-10 p-10 shadow-md">
    <h1 class="text-[#0c0c0c] text-2xl font-semibold">Loan Decision Engine</h1>
    <form class="flex flex-col gap-4 mt-4" @submit.prevent="submitForm">
      <slot></slot>
      <button
        class="text-white bg-[#3498db] hover:bg-[#2980b9] py-2 rounded shadow-md transition-all duration-200"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormSection',
  methods: {
    submitForm() {
      this.$emit('submit');
    },
  },
};
</script>
