<template>
<h1>C-APP</h1>
<div>
  <CurrentDate v-model="date"/>
  <calendar v-model="date"/>
</div>
</template>

<script>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ru";
dayjs.extend(localizedFormat);
dayjs.locale("ru");

import './assets/calendar.scss'
import calendar from './components/calendar.vue'
import CurrentDate from './components/CurrentDate.vue'
export default {
  name: 'C-App',
  components: {
    calendar,
    CurrentDate
  },
  data() {
    return {
      date: new Date()
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
