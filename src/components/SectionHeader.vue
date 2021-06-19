<template>
  <div :class='["section-header", align && `section-header--${align}`]'>
    <Typography class='section-header__text' type='heading2' transform="uppercase" :color='color'>
      <slot/>
    </Typography>
    <component class='section-header__bubble' :is='bubble' />
  </div>
</template>

<script>
import Grow from '@/assets/bubbles/grow.svg';
import HappyFace from '@/assets/bubbles/happy-face.svg';
import Megaphone from '@/assets/bubbles/megaphone.svg';
import Question from '@/assets/bubbles/question.svg';
import Star from '@/assets/bubbles/star.svg';
import Typography from './Typography';

export default {
  components: {
    Typography,
    Grow,
    HappyFace,
    Megaphone,
    Question,
    Star,
  },
  name: 'SectionHeader',
  props: {
    bubble: String,
    color: String,
    align: String,
  },
}
</script>

<style lang="scss">
@use '@/styles/mixins';
@use '@/styles/units';

.section-header {
  display: flex;

  @each $tag, $prop in (start: flex-start, center: center, end: flex-end) {
    &--#{$tag} {
      justify-content: $prop;
    }
  }

  @include mixins.media(phone) {
    justify-content: space-between !important;
  }

  &__bubble {
    height: units.spacing(17.5);
    flex-shrink: 0;
    width: auto;

    @include mixins.media(tablet) {
      width: units.spacing(10);
    }
  }

  &__text {
    margin-top: units.spacing(4);
    margin-right: units.spacing(4);

    @include mixins.media(tablet) {
      margin-top: units.spacing(1.75);
    }
  }
}
</style>