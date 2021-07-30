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
import DatePickerElement from './DatePickerElement'

export default {
  name: "YearPicker",
  extends: DatePickerElement,
  computed: {
  },
  methods: {
    input(event) {
      const year = event.target.value
      this.update(this.date.year(year));
    },
  },
};
</script>
