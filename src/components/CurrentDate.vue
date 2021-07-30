<template>
  <div class="current-date">
    <span @click="prevMonth" class="button">&laquo;</span>
    <span class="date">{{dayOfMonth}}</span>
    <MonthPicker :modelValue="date" @update:modelValue="update"/>
    <YearPicker :modelValue="date" @update:modelValue="update"/>
    <span @click="nextMonth" class="button">&raquo;</span>
  </div>
</template>
<script>
import DatePickerElement from './DatePickerElement'
import MonthPicker from './MonthPicker.vue'
import YearPicker from './YearPicker.vue'
export default {
  name: 'CurrentDate',
  extends: DatePickerElement,
  components: {
    MonthPicker,
    YearPicker
  },
  computed: {
    dayOfMonth() {
      return this.date.date()
    },
  },
  methods: {
    prevMonth() {
      this.update(this.date.subtract(1, 'month').toDate());
    },
    nextMonth() {
      this.update(this.date.add(1, 'month').toDate());
    }
  }

}
</script>