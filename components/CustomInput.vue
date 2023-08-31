<template>
  <div class="flex flex-col">
    <label>
      {{ label }}
    </label>
    <input
        v-model="model"
        class="text-[#0c0c0c] border-[#6b6d6e] border-[1.5px] rounded"
        type="text"
        :name="name"
      />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase()
    },
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
