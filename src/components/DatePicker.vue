<template>
  <Activator @activate="togglePopup">
    <slot></slot>
  </Activator>
  <Popup v-model="active" :top="top" :left="left">
    <CurrentDate v-model="date"/>
    <calendar v-model="date" @click="active=false"/>
  </Popup>
</template>
<script>
import '../assets/calendar.scss'
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ru";
import calendar from './calendar.vue'
import CurrentDate from './CurrentDate.vue'
import Activator from './Activator.vue'
import Popup from './Popup.vue'

dayjs.extend(localizedFormat);
dayjs.locale("ru");

export default {
  name: 'Datepicker',
  components: {
    calendar,
    CurrentDate,
    Activator,
    Popup
  },
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
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
  methods: {
    getCurrentDate() {
      return this.modelValue;
    },
    setCurrentDate(value) {
      this.$emit('update:modelValue', value)
    },
    togglePopup({top, left}) {
      this.top = top
      this.left = left
      this.active = true
    }
  }
}
</script>
