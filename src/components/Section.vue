<template>
  <component :is="as" class="section">
    <a class="section__anchor" ref="anchor" :id="id" />
    <div :class="[as && `section__content--${as}`, 'section__content', fullWidth && 'section__content--full-width']">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  name: 'Section',
  inject: ['register_scrollspy'],
  props: {
    contentClass: [String, Object, Array],
    no_scrollspy: Boolean,
    id: String,
    as: {
      default: () => 'div',
      type: String,
    },
    fullWidth: Boolean
  },
  mounted() {
    if (!this.no_scrollspy) {
      this.register_scrollspy(this.$refs.anchor, () => {
        history.replaceState(null, null, `#${this.id || ''}`);
      });
    }
  },
};
</script>

<style lang="scss">
@use '@/styles/units';

$_spacing: 10;

.section {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-right: units.spacing($_spacing);
  padding-left: units.spacing($_spacing);
  position: relative;

  &__anchor {
    position: absolute;
    bottom: auto;
    top: 0;
  }

  &__content {
    max-width: units.$page-width;
    width: 100%;

    &--nav {
      max-width: units.$nav-width;
    }

    &--full-width {
      max-width: 100vw;
    }
  }
}
</style>
