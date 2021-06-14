<template>
  <component :is='as' class='section'>
    <a class='section__anchor' ref='anchor' :id='id'/>
    <div
      :class='[
        as && `section__content--${as}`,
        "section__content",
      ]'
    >
      <slot/>
    </div>
  </component>
</template>

<script>
export default {
  name: 'Section',
  props: {
    contentClass: [ String, Object, Array ],
    id: String,
    as: {
      default: () => 'div',
      type: String,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio === 1 && !localStorage.getItem('ignore-observer')) {
          window.location.hash = this.id || '';
        }
      }, { threshold: 1.0 });
      this.observer.observe(this.$refs.anchor);
    });
  },
};
</script>

<style lang="scss">
@use '@/styles/units';

.section {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-right: units.spacing(6);
  padding-left: units.spacing(6);
  position: relative;

  &__anchor {
    position: absolute;
    top: 0;
    bottom: auto;
  }

  &__content {
    max-width: units.$page-width;
    width: 100%;

    &--nav {
      max-width: units.$nav-width;
    }
  }
}
</style>