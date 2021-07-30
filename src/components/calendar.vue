<template>
  <div class="calendar">
    <div v-for="(week, weekIndex) in month" class="row" :key="weekIndex">
      <div v-for="(day, dayIndex) in week" class="cell" :key="dayIndex" @click="update(day.date)"
      :class="{blind: !day.sameMonth, current: day.current}">
        {{ day.monthDay }}
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import DatePickerElement from './DatePickerElement'
export default {
  name: "Calendar",
  extends: DatePickerElement,
  computed: {
    today() {
      return this.date.format("L");
    },
    month() {
      const start = dayjs(this.date).startOf("month").startOf("week");
      const end = dayjs(this.date).endOf("month").endOf("week");
      const weeks = Math.ceil(end.diff(start, "week", true));
      const result = [];
      for (let week = 0; week < weeks; week++) {
        let days = [];
        for (let weekDay = 0; weekDay < 7; weekDay++) {
          const date = start.add(week * 7 + weekDay, "day");
          const sameMonth = date.isSame(this.date, "month");
          const monthDay = date.date();
          const current = date.isSame(this.modelValue, 'day')
          days.push({ date, sameMonth, monthDay, current });
        }
        result.push(days);
      }
      return result;
    },
  }
};
</script>
