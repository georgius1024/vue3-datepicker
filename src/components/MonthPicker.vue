<template>
  <input class="month-picker" type="number" min="1" max="12" :value="month" @input="input" />
</template>
<script>
import DatePickerElement from './DatePickerElement'

export default {
  name: "MonthPicker",
  extends: DatePickerElement,
  methods: {
    input(event) {
      const month = event.target.value
      this.update(this.date.month(month-1));
    }
  }
};
</script>