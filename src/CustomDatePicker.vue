<template>
  <Activator @activate="activate">
    <slot></slot>
  </Activator>
  <Popup v-model="active" :top="top" :left="left">
    <CurrentDate v-model="date" />
    <calendar v-model="date" @click="dateSelected" />
    <button class="tomorrow" @click="tomorrow">Tomorrow</button>
  </Popup>
</template>
<script>
import DatePicker from "./components/DatePicker.vue";
import CurrentDate from "./components/CurrentDate.vue";
import calendar from "./components/calendar.vue";
import Activator from "./components/Activator.vue";
import Popup from "./components/Popup.vue";

export default {
  extends: DatePicker,
  components: {
    CurrentDate,
    calendar,
    Activator,
    Popup
  },
  methods: {
    tomorrow() {
      this.setCurrentDate(this.wrappedDate.add(1, "day").toDate());
      this.commit();
      this.deactivate();
    },
  },
};
</script>
