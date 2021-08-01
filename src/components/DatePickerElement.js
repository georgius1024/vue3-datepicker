import dayjs from "dayjs";
export default {
  inject: ["getCurrentDate", "setCurrentDate", "deactivate", "commit"],
  computed: {
    date() {
      return dayjs(this.getCurrentDate());
    },
    month() {
      return this.date.month() + 1
    },
    year() {
      return this.date.year()
    },
    day() {
      return this.date.date()
    }
  },
  methods: {
    update(value) {
      this.setCurrentDate(dayjs(value).toDate()); 
    }
  }
}