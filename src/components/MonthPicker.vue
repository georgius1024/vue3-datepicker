<template>
  <input class="month-picker" type="number" min="1" max="12" :value="month" @input="input" />
</template>
<script>
import dayjs from "dayjs";
export default {
  name: "MonthPicker",
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      return dayjs(this.modelValue);
    },
    month() {
      return this.date.month() + 1
    }
  },
  methods: {
    input(event) {
      const month = event.target.value
      this.$emit('update:modelValue', this.date.month(month-1).toDate());
    }
  }
};
</script>