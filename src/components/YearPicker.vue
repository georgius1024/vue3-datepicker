<template>
  <input
    class="year-picker"
    type="number"
    min="1900"
    max="2200"
    :value="year"
    @input="input"
  />
</template>
<script>
import dayjs from "dayjs";
export default {
  name: "YearPicker",
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
    year() {
      return this.date.year();
    },
  },
  methods: {
    input(event) {
      const year = event.target.value
      this.$emit("update:modelValue", this.date.year(year).toDate());
    },
  },
};
</script>
