<template>
  <div class="current-date">
    <span>&laquo;</span>
    |
    <span class="date">{{dayOfMonth}}</span>
    |
    <MonthPicker :value="date" @input="$emit($event)"/>
    |
    <YearPicker :value="date" @input="$emit($event)"/>
    |
    <span>&raquo;</span>
  </div>
</template>
<script>
import dayjs from "dayjs";
import MonthPicker from './MonthPicker.vue'
import YearPicker from './YearPicker.vue'
export default {
  name: 'CurrentDate',
  components: {
    MonthPicker,
    YearPicker
  },
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
    dayOfMonth() {
      return this.date.date()
    },
  }
}
</script>