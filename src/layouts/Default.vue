<template>
  <div>
    <Section as='nav'>
      owo
    </Section>
    <slot/>
  </div>
</template>

<script>
import Section from '@/components/Section';

export default {
  name: 'Layout',
  components: {
    Section,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang='scss'>
  @use '~/styles/colors';
  @use '~/styles/units';
  @include colors.init();

  :root {
    --background: linear-gradient(180deg, #012c3800 39.09%, #032D39 60.37%), linear-gradient(88.96deg, #002C37 1.77%, #004D57 95.9%);
  }

  body {
    background: var(--background);
    color: colors.css-color(white);
    font-family: units.$font;
    padding: 0;
    margin: 0;
  }

  @include colors.deferInit();
</style>
