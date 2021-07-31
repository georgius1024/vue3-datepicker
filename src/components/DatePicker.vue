<template>
  <Activator @activate="activate">
    <slot></slot>
  </Activator>
  <Popup v-model="active" :top="top" :left="left">
    <CurrentDate v-model="date" />
    <calendar v-model="date" @click="dateSelected" />
  </Popup>
</template>
<script>
import "../assets/calendar.scss";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ru";
import calendar from "./calendar.vue";
import CurrentDate from "./CurrentDate.vue";
import Activator from "./Activator.vue";
import Popup from "./Popup.vue";

dayjs.extend(localizedFormat);
dayjs.locale("ru");

export default {
  name: "Datepicker",
  components: {
    calendar,
    CurrentDate,
    Activator,
    Popup,
  },
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      date: null,
      active: false,
      top: 0,
      left: 0,
    };
  },
  mounted() {
    this.date = this.modelValue;
  },
  provide() {
    return {
      getCurrentDate: this.getCurrentDate,
      setCurrentDate: this.setCurrentDate,
      deactivate: this.deactivate,
      commit: this.commit,
    };
  },
  methods: {
    getCurrentDate() {
      return this.date;
    },
    setCurrentDate(value) {
      this.date = value;
    },
    deactivate() {
      this.active = false;
    },
    commit() {
      this.$emit("update:modelValue", this.date);
    },
    dateSelected() {
      this.commit();
      this.deactivate();
    },
    activate({ top, left }) {
      this.top = top;
      this.left = left;
      this.active = true;
      this.date = this.modelValue;
    },
  },
};
</script>
