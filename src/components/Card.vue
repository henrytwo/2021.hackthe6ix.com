<template>
  <component
    :style="offset !== undefined ? `--offset: ${offset * 0.25}rem` : undefined"
    :class="[
      boxed && `card--${vertical}-${horizontal}`,
      color && `card--${color}`,
      'card',
    ]"
    :is="as"
  >
    <slot />
    <div
      :class="[
        backdropColor && `card__back--${backdropColor}`,
        `card__back--${vertical}-${horizontal}`,
        'card__back',
      ]"
      v-if="offset"
    />
  </component>
</template>

<script>
export const placements = {
  BOTTOM_RIGHT: 0,
  BOTTOM_LEFT: 1,
  TOP_RIGHT: 2,
  TOP_LEFT: 3,
};

export default {
  name: 'Card',
  props: {
    backdropColor: String,
    boxed: Boolean,
    offset: String,
    as: {
      type: String,
      default: () => 'div',
    },
    placement: {
      type: Number,
      default: () => placements.BOTTOM_LEFT,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    vertical() {
      return [placements.TOP_RIGHT, placements.TOP_LEFT].includes(
        this.placement,
      )
        ? 'top'
        : 'bottom';
    },
    horizontal() {
      return [placements.TOP_RIGHT, placements.BOTTOM_RIGHT].includes(
        this.placement,
      )
        ? 'right'
        : 'left';
    },
  },
};
</script>

<style lang="scss">
@use '@/styles/colors';

.card {
  position: relative;

  @each $tag, $_ in colors.$colors {
    &--#{$tag} {
      background-color: colors.css-color($tag);
    }
  }

  @each $v in (bottom top) {
    @each $h in (right left) {
      &--#{$v}-#{$h} {
        margin-#{$v}: var(--offset);
        margin-#{$h}: var(--offset);
      }
    }
  }

  &__back {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    @each $tag, $_ in colors.$colors {
      &--#{$tag} {
        background-color: colors.css-color($tag);
      }
    }

    @each $v in (bottom top) {
      @each $h in (right left) {
        &--#{$v}-#{$h} {
          #{$v}: calc(-2 * var(--offset));
          #{$h}: calc(-2 * var(--offset));
        }
      }
    }
  }
}
</style>
