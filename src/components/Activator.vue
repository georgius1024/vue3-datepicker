<template>
  <div @mousedown="click" style="display: inline-block">
    <slot> </slot>
  </div>
</template>
<script>
export const status = {
  enabled: true,
};
export default {
  name: "Activator",
  methods: {
    click(e) {
      const { left, bottom } = this.$el.getBoundingClientRect();
      
      this.$emit("activate", {left, top: bottom});
      e.stopPropagation();
    },
  },
};
</script>