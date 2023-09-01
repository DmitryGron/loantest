<template>
  <div class="bg-[#f4fefff6] rounded border-sky-950 border-[2px] p-5 mt-5">
    <p v-if="answer.message">Message: {{ answer.message }}</p>
    <p
      v-if="answer.decision"
      :class="{
        'text-red-500': answer.decision === 'negative',
        'text-green-500': answer.decision === 'positive',
      }"
      class="text-lg font-semibold"
    >
      Decision: {{ answer.decision }}
    </p>
    <p v-if="answer.amount" class="text-lg">
      Approved Amount: {{ answer.amount }} €
    </p>
    <p v-if="answer.period" class="text-lg">
      Approved Period: {{ answer.period }} months
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: "ResultSection",
  props: {
    answer: {
      type: Object,
      required: true,
    },
  },
};
</script>
