<template>
  <Typography
    :class='[
      disabled && "button--disabled",
      `button--color--${color}`,
      `button--type--${type}`,
      "button",
    ]'
    :disabled='disabled'
    transform='uppercase'
    type='heading4'
    align='center'
    color='black'
    :as='as'
  >
    <slot/>
  </Typography>
</template>

<script>
import Typography from './Typography';

export default {
  name: 'Button',
  components: {
    Typography,
  },
  props: {
    disabled: Boolean,
    // primary, ghost
    type: {
      type: String,
      default: () => 'primary',
    },
    color: {
      type: String,
      default: () => 'light-teal',
    },
    as: {
      type: String,
      default: () => 'button',
    },
  },
};
</script>

<style lang="scss" scoped>
  @use '@/styles/colors';
  @use '@/styles/units';

  .button {
    padding: calc(#{units.spacing(2)} - 1px) calc(#{units.spacing(4)} - 1px);
    border-radius: units.spacing(0.5);
    letter-spacing: units.spacing(0.5);
    justify-content: center;
    display: inline-flex;
    align-items: center;
    appearance: none;
    cursor: pointer;

    &--type--primary {
      box-shadow: 0px units.spacing(0.5) units.spacing(1) 0px #00000033;
      background-color: rgb(var(--color));
      border: 1px solid rgb(var(--color));

      &:hover, &:focus {
        background-color: colors.css-color(white);
      }
    }

    &--type--ghost {
      background-color: transparent;
      border: 1px solid transparent;

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
  }
</style>