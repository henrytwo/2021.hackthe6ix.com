<template>
  <div>
    <div id='top'/>
    <Navigation/>
    <slot/>
    <footer class='footer'>
      <Mail/>
      <Footer/>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import smoothscroll from 'smoothscroll-polyfill';
import Navigation from './Navigation';
import Footer from './Footer';
import Mail from './Mail';

smoothscroll.polyfill();

export default {
  name: 'Layout',
  components: {
    Navigation,
    Footer,
    Mail,
  },
  mounted() {
    window.setTimeout(() => {
      document.body.classList.add('animate');
    }, 100);
  },
};
</script>

<style lang='scss'>
@use '~/styles/mixins';
@use '~/styles/colors';
@use '~/styles/units';
@include colors.init();

:root {
  --background:
    linear-gradient(180deg, #012c3800 40%, #032D39 60%),
    linear-gradient(90deg, #002C37 2%, #004D57 96%);
}

html {
  scroll-behavior: smooth;
  @include mixins.media(tablet) {
    font-size: 14px;
  }

  @include mixins.media(phone) {
    font-size: 12px;
  }
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
