<template>
  <div class="current-date">
    <span @click="prevMonth" class="button">&laquo;</span>
    |
    <span class="date">{{dayOfMonth}}</span>
    |
    <MonthPicker :modelValue="date" @update:modelValue="input"/>
    |
    <YearPicker :modelValue="date" @update:modelValue="input"/>
    |
    <span @click="nextMonth" class="button">&raquo;</span>
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
    modelValue: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      return dayjs(this.modelValue);
    },
    dayOfMonth() {
      return this.date.date()
    },
  },
  methods: {
    prevMonth() {
      this.$emit('update:modelValue', this.date.subtract(1, 'month').toDate());
    },
    nextMonth() {
      this.$emit('update:modelValue', this.date.add(1, 'month').toDate());
    },
    input(value) {
      this.$emit('update:modelValue', value);
    }
  }

}
</script>