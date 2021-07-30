<template>
  <div class="popup-wrapper" @click.stop="close" v-if="modelValue">
    <div class="popup-frame" ref="popup" :style="popupStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    modelValue: {
      default: false,
    },
    top: {
      default: 0,
    },
    left: {
      default: 0,
    },
  },
  computed: {
    popupStyle() {
      return {
        top: `${this.top}px`,
        left: `${this.left}px`,
      };
    },
  },
  methods: {
    close(e) {
      if (!this.$refs.popup.contains(e.target)) {
        this.$emit("update:modelValue", false);
        e.stopPropagation()
      }
    }
  }
};
</script>