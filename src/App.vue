<template>
<h1>C-APP</h1>
<div>
  <Activator @activate="togglePopup">
    <button>{{today}}</button>
  </Activator>
  <Popup v-model="active" :top="top" :left="left">
    <CurrentDate v-model="date"/>
    <calendar v-model="date" @click="active=false"/>
  </Popup>
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
import Activator from './components/Activator.vue'
import Popup from './components/Popup.vue'
export default {
  name: 'C-App',
  components: {
    calendar,
    CurrentDate,
    Activator,
    Popup
  },
  data() {
    return {
      date: new Date(),
      active: false,
      top: 0,
      left: 0
    }
  },
  provide() {
    return {
      getCurrentDate: this.getCurrentDate,
      setCurrentDate: this.setCurrentDate,
    };
  },
  computed: {
    today() {
      return dayjs(this.date).format('L')
    }
  },
  methods: {
    getCurrentDate() {
      return this.date;
    },
    setCurrentDate(value) {
      this.date = value
    },
    togglePopup({top, left}) {
      console.log({top, left})
      this.top = top
      this.left = left
      this.active = true
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
