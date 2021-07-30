<template>
  <p>{{ today }}</p>
  <div class="calendar">
    <div v-for="(week, weekIndex) in month" class="row" :key="weekIndex">
      <div v-for="(day, dayIndex) in week" class="cell" :key="dayIndex" @click="input(day.date)">
        {{ day.monthDay }}
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ru";

dayjs.extend(localizedFormat);
dayjs.locale("ru");

export default {
  name: "Calendar",
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
    today() {
      return this.date.format("L");
    },
    month() {
      const start = dayjs(this.date).startOf("month").startOf("week");
      const end = dayjs(this.date).endOf("month").endOf("week");
      const weeks = end.diff(start, "week");
      const result = [];
      for (let week = 0; week < weeks; week++) {
        let days = [];
        for (let weekDay = 0; weekDay < 7; weekDay++) {
          const date = start.add(week * 7 + weekDay, "day");
          const sameMonth = date.isSame(this.date, "month");
          const monthDay = date.date();
          days.push({ date, sameMonth, monthDay });
        }
        result.push(days);
      }
      return result;
    },
  },
  methods: {
    input(value) {
      this.$emit("input", value.toDate());
    },
  },
};
</script>
