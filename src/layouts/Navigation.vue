<template>
  <Section :class="[isTop || 'nav--scrolled', 'nav']" as="nav">
    <g-link to="/#top" class="nav__logo">
      <Icon width="24" />
      <Typography type="heading3" transform="uppercase" color="yellow">
        <Typography type="heading3" color="teal"> HT6 </Typography> Digital
      </Typography>
    </g-link>
    <Button @click="showMobile = true" class="nav__menu" type="ghost">
      <FontAwesomeIcon icon="bars" />
    </Button>
    <ul :class="[showMobile && 'nav__links--show', 'nav__links']">
      <li class="nav__header">
        <div class="nav__logo">
          <Icon width="24" />
          <Typography type="heading3" transform="uppercase" color="yellow">
            <Typography type="heading3" color="teal"> HT6 </Typography> Digital
          </Typography>
        </div>
        <Button @click="showMobile = false" class="nav__menu" type="ghost">
          <FontAwesomeIcon icon="times" />
        </Button>
      </li>
      <li v-for="(link, index) in links" :key="index">
        <a
          :class="[
            link.to.slice(2) === current && 'nav__link--active',
            'nav__link',
          ]"
          @click="onNavigate"
          :href="link.to"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </Section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Typography from '@/components/Typography';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Icon from '@/assets/icon.svg';

export default {
  name: 'Navigation',
  inject: ['current_scrollspy', 'get_scrollspy'],
  components: {
    FontAwesomeIcon,
    Typography,
    Section,
    Button,
    Icon,
  },
  data() {
    return {
      showMobile: false,
      isTop: true,
    };
  },
  beforeMount() {
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.scrollHandler();
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler, { passive: true });
  },
  methods: {
    scrollHandler() {
      this.isTop = window.pageYOffset < 10;
    },
    onNavigate(e) {
      e.preventDefault();
      const id = e.target.href.split('#')[1];
      const top = document.getElementById(id).parentElement.offsetTop;
      window.scrollTo({
        behavior: 'smooth',
        top,
      });
      history.replaceState(null, null, `#${id}`);
      this.showMobile = false;
    },
  },
  computed: {
    current() {
      return this.current_scrollspy();
    },
    links() {
      return [
        {
          label: 'About',
          to: '/#about',
        },
        {
          label: 'Why Us?',
          to: '/#why',
        },
        {
          label: 'Sponsor Spotlight',
          to: '/#spotlight',
        },
        {
          label: 'Past Sponsors',
          to: '/#past-sponsors',
        },
        {
          label: 'Past Speakers',
          to: '/#past-speakers',
        },
        {
          label: 'FAQ',
          to: '/#faq',
        },
      ];
    },
  },
};
</script>

<style lang="scss">
@use '~/styles/colors';
@use '~/styles/mixins';
@use '~/styles/units';

.nav {
  @include mixins.transition(background box-shadow);
  padding-bottom: units.spacing(2.5);
  padding-top: units.spacing(2.5);
  position: sticky;
  z-index: 100;
  top: 0;

  &--scrolled {
    background: linear-gradient(90deg, #002c37 0%, #004d57 100%);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  }

  & > div {
    align-items: center;
    display: flex;
  }

  &__logo {
    grid-auto-flow: column;
    display: grid;
    align-items: center;
    grid-gap: units.spacing(4);
    margin-right: auto;
    text-decoration: none;
  }

  &__menu {
    padding: units.spacing(2);
    font-size: units.spacing(6);
    margin: auto 0;
    display: none;
    width: units.spacing(12);

    @include mixins.media(laptop) {
      display: flex;
    }
  }

  &__links {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;

    @include mixins.media(laptop) {
      display: none;

      &--show {
        position: fixed;
        flex-direction: column;
        box-sizing: border-box;
        padding: units.spacing(2.5) units.spacing(6);
        background: linear-gradient(90deg, #002c37 0%, #004d57 100%);
        display: flex;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 900;
      }
    }
  }

  &__link {
    @include mixins.transition(border-color color);

    @each $t, $v in map-get(units.$font-config, heading4) {
      #{$t}: $v;
    }
    padding: units.spacing(1.5) units.spacing(4);
    border-bottom: 2px solid transparent;
    margin-left: units.spacing(2);
    text-decoration: none;
    display: inline-block;
    color: inherit;

    &--active,
    &:hover {
      border-color: colors.css-color(teal);
      color: colors.css-color(teal);
    }

    @include mixins.media(laptop) {
      padding: units.spacing(4);
      margin: 0;
    }
  }

  &__header {
    display: none;
    margin-bottom: units.spacing(6);

    @include mixins.media(laptop) {
      display: flex;
    }
  }
}
</style>
