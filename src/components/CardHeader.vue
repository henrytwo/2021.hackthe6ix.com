<template>
  <div
    :class='[
      `card-header--${backgroundColor}`,
      `card-header--${size}`,
      "card-header",
    ]'
  >
    <div class='card-header__icons'>
      <div
        :class='[
          `card-header__icon--${color}`,
          `card-header__icon--${size}`,
          "card-header__icon",
        ]'
        v-for='color in iconColors'
        :key='color'
      />
    </div>
    <Typography
      :color='color'
      v-if='title'
      type='monospace'
    >
      {{ title }}
    </Typography>
  </div>
</template>

<script>
import Typography from './Typography';

export const sizes = {
  LARGE: 'large',
  NORMAL: 'normal',
  SMALL: 'small',
};

export default {
  name: 'CardHeader',
  components: {
    Typography,
  },
  props: {
    color: String,
    title: String,
    backgroundColor: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconColors() {
      return [
        'light-peach',
        'light-yellow',
        'light-purple',
      ];
    }
  }
};
</script>

<style lang="scss">
@use '@/styles/colors';
@use '@/styles/units';

$_sizes: (
  small: units.spacing(2),
  normal: units.spacing(3),
  large: units.spacing(4.5),
);

.card-header {
  grid-template-columns: 1fr auto 1fr;
  justify-content: center;
  align-items: center;
  display: grid;

  @each $tag, $_ in colors.$colors {
    &--#{$tag} {
      background-color: colors.css-color($tag);
    }
  }

  &__icons {
    display: flex;
    align-items: center;
  }

  &__icon {
    border-radius: 999px;

    @each $tag, $_ in colors.$colors {
      &--#{$tag} {
        background-color: colors.css-color($tag);
      }
    }

    @each $tag, $size in $_sizes {
      &--#{$tag} {
        margin-left: $size * 0.8;
        height: $size;
        width: $size;
      }
    }
  }
}
</style>