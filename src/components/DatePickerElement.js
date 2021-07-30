import dayjs from "dayjs";
export default {
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      return dayjs(this.modelValue);
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
      this.$emit('update:modelValue', dayjs(value).toDate());      
    }
  }
}