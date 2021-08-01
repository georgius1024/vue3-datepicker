<template>
<h1>C-APP</h1>
<div>
  <DatePicker v-model="date">
    <button>{{today}}</button>
    <template v-slot:footer>
      <Tomorrow/>
    </template>
  </DatePicker>
  <CustomDatePicker v-model="date">
    <button>{{today}}</button>
  </CustomDatePicker>
</div>
</template>

<script>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ru";
dayjs.extend(localizedFormat);
dayjs.locale("ru");
//import './assets/dark-theme.scss'
import "./assets/calendar.scss";

import DatePicker from './components/DatePicker.vue'
import CustomDatePicker from './CustomDatePicker.vue'
import Tomorrow from './Tomorrow.vue'
export default {
  name: 'C-App',
  components: {
    DatePicker,
    CustomDatePicker,
    Tomorrow
  },
  data() {
    return {
      date: new Date(),
    }
  },
  computed: {
    today() {
      return dayjs(this.date).format('L')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
