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
import Navigation from './Navigation';
import Footer from './Footer';
import Mail from './Mail';

export default {
  name: 'Layout',
  components: {
    Navigation,
    Footer,
    Mail,
  },
  data() {
    return {
      scrollspy_listeners: {},
      scrollspy_current: null,
      scrollspy: true,
    };
  },
  computed: {
    sortedScrollspy() {
      return Object.values(this.scrollspy_listeners).sort((a, b) => {
        return b.target.offsetHeight - a.target.offsetHeight;
      });
    },
  },
  methods: {
    register_scrollspy(el, handler) {
      this.scrollspy_listeners[el.id] = {
        target: el,
        handler,
      };
    },
    unregister_scrollspy(el) {
      delete this.scrollspy_listeners[el.id];
    },
    set_scrollspy(state = !this.scrollspy) {
      this.scrollspy = state;
    },
    get_scrollspy(id) {
      return this.scrollspy_listeners[id];
    },
    onscroll() {
      if (window.pageYOffset < 100) {
        this.scrollspy_current = '';
        return;
      }

      const aboveWindow = this.sortedScrollspy.filter(item => {
        return (item.target.offsetParent.offsetTop - (window.outerHeight * 0.8)) <= window.pageYOffset;
      });
      this.scrollspy_current = aboveWindow[aboveWindow.length - 1].target.id;
    },
  },
  provide() {
    return {
      current_scrollspy: () => this.scrollspy_current,
      unregister_scrollspy: this.unregister_scrollspy,
      register_scrollspy: this.register_scrollspy,
      get_scrollspy: this.get_scrollspy,
      set_scrollspy: this.set_scrollspy,
    };
  },
  mounted() {
    window.setTimeout(() => {
      document.body.classList.add('animate');
    }, 100);
    window.addEventListener('scroll', this.onscroll, { passive: true });
    this.onscroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onscroll, { passive: true });
  }
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
