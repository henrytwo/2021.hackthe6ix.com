<template>
  <div
    :class="[color && `placeholder--color--${color}`, 'placeholder']"
    :style="{ '--width': width, '--height': height }"
  />
</template>

<script>
export default {
  name: 'Placeholder',
  props: {
    width: String,
    height: String,
    context: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: () => 'grey',
    },
  },
  mounted() {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`TODO: ${this.context} is not done yet`);
    }
  },
};
</script>

<style lang="scss" scoped>
@use '@/styles/colors';

.placeholder {
  width: var(--width, 0);
  height: var(--height, 0);
  display: inline-block;

  @each $color, $_ in colors.$colors {
    &--color--#{$color} {
      background-color: colors.css-color($color);
    }
  }
}
</style>
