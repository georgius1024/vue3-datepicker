<template>
  <input class="month-picker" type="number" min="1" max="12" :value="month" @input="input" />
</template>
<script>
import dayjs from "dayjs";
export default {
  name: "MonthPicker",
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
    month() {
      return this.date.month() + 1
    }
  },
  methods: {
    input(month) {
      this.$emit('input', this.date.month(month-1).toDate());
    }
  }
};
</script>