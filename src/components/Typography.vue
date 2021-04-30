<template>
  <component
    :class='[
      transform && `text--transform--${transform}`,
      weight && `text--weight--${weight}`,
      color && `text--color--${color}`,
      align && `text--align--${align}`,
      `text--type--${type}`,
      "text",
    ]'
    :is='as'
  >
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'Typography',
  props: {
    as: {
      default: () => 'span',
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    align: String,
    transform: String,
    weight: [String, Number],
    color: {
      type: String,
      default: () => 'white',
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/styles/colors';
@use '@/styles/units';

$_config: (
  heading1: (
    font-weight: 700,
    font-size: units.spacing(17),
    line-height: units.spacing(18),
  ),
  heading2: (
    font-weight: 700,
    font-size: units.spacing(10.5),
    line-height: units.spacing(12),
    letter-spacing: 2%,
  ),
  heading3: (
    font-weight: 700,
    font-size: units.spacing(6.5),
    line-height: units.spacing(10),
  ),
  heading4: (
    font-weight: 700,
    font-size: units.spacing(4),
    line-height: units.spacing(6),
  ),
  paragraph: (
    font-weight: 400,
    font-size: units.spacing(4),
    line-height: units.spacing(6),
  ),
  small: (
    font-weight: 400,
    font-size: units.spacing(3.5),
    line-height: units.spacing(6),
  ),
  xsmall: (
    font-weight: 400,
    font-size: units.spacing(3),
    line-height: units.spacing(6),
  ),
);

.text {
  font-family: units.$font;
  letter-spacing: units.spacing(0.25);
  margin: 0;
  
  @each $type, $config in $_config {
    &--type--#{$type} {
      @each $tag, $val in $config {
        #{$tag}: $val;
      }
    }
  }

  @each $color, $_ in colors.$colors {
    &--color--#{$color} {
      color: colors.css-color($color);
    }
  }

  @each $type in (start center end) {
    &--align--#{$type} {
      text-align: $type;
    }
  }

  @each $type in (uppercase lowercase capitalize) {
    &--transform--#{$type} {
      text-transform: $type;
    }
  }

  @each $weight in (700 400) {
    &--weight--#{$weight} {
      font-weight: $weight;
    }
  }
}
</style>