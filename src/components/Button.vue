<template>
  <Typography
    :class='[
      disabled && "button--disabled",
      `button--color--${color}`,
      `button--type--${type}`,
      "button",
    ]'
    v-on='$listeners'
    :disabled='disabled'
    type='heading4'
    align='center'
    color='black'
    :as='as'
  >
    <FontAwesomeIcon
      :class='["button__icon", "button__icon--left"]'
      :icon='leftIcon'
      v-if='leftIcon'
    />
    <slot/>
    <FontAwesomeIcon
      :class='["button__icon", "button__icon--right"]'
      :icon='rightIcon'
      v-if='rightIcon'
    />
  </Typography>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Typography from './Typography';

export default {
  name: 'Button',
  components: {
    FontAwesomeIcon,
    Typography,
  },
  props: {
    rightIcon: [String, Array],
    leftIcon: [String, Array],
    disabled: Boolean,
    color: {
      type: String,
      default: () => 'light-teal',
    },
    // primary, ghost
    type: {
      type: String,
      default: () => 'primary',
    },
    as: {
      type: String,
      default: () => 'button',
    },
  },
};
</script>

<style lang="scss">
  @use '@/styles/colors';
  @use '@/styles/units';

  .button {
    padding: calc(#{units.spacing(2)} - 1px) calc(#{units.spacing(4)} - 1px);
    letter-spacing: units.spacing(0.5);
    border-radius: units.spacing(0.5);
    justify-content: center;
    display: inline-flex;
    align-items: center;
    appearance: none;
    cursor: pointer;

    &--type--primary {
      box-shadow: 0px units.spacing(0.5) units.spacing(1) 0px #00000033;
      background-color: rgb(var(--color));
      border: 1px solid rgb(var(--color));
      text-transform: uppercase;

      &:hover, &:focus {
        background-color: colors.css-color(white);
      }
    }

    &--type--ghost {
      background-color: transparent;
      border: 1px solid transparent;
      color: rgb(var(--color));

      &:hover, &:focus {
        background-color: colors.css-color(white, $alpha: 0.05);
      }
    }

    @each $color, $_ in colors.$colors {
      &--color--#{$color} {
        --color: var(#{colors.css-var($color)});
      }
    }

    &:disabled, &--disabled {
      background-color: colors.css-color('grey');
      border-color: colors.css-color('grey');
      color: colors.css-color(dark-grey);
      cursor: not-allowed;
    }

    &__icon {
      width: units.spacing(4);
      height: auto;

      &--right {
        margin-left: units.spacing(3);
      }

      &--left {
        margin-right: units.spacing(3);
      }
    }
  }
</style>