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
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      return dayjs(this.value);
    },
    year() {
      return this.date.year();
    },
  },
  methods: {
    input(year) {
      this.$emit("input", this.date.year(year).toDate());
    },
  },
};
</script>
