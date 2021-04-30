<template>
  <component :is='as' class='container'>
    <div :class='[as && `content--${as}`, "content"]'>
      <slot/>
    </div>
  </component>
</template>

<script>
export default {
  name: 'Section',
  props: {
    contentClass: [ String, Object, Array ],
    as: {
      default: () => 'div',
      type: String,
    }
  },
};
</script>

<style lang="scss" scoped>
@use '@/styles/units';

.container {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 units.spacing(6);
}

.content {
  max-width: units.$page-width;
  width: 100%;

  &--nav {
    max-width: units.$nav-width;
  }
}
</style>