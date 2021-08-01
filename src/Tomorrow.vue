<template>
  <button @click="tomorrow">tomorrow</button>
</template>
<script>
import dayjs from "dayjs";
import DatePickerElement from './components/DatePickerElement'
export default {
  extends: DatePickerElement,
  methods: {
    tomorrow() {
      this.setCurrentDate(this.date.add(1, "day").toDate());
      this.commit();
      this.deactivate();
    }
  }
}
</script>