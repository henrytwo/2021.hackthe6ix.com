<template>
  <Section class="splash" as="section">
    <div class="splash__content">
      <Typography type="heading3" as="p">
        {{ $static.metadata.startDate }}-{{ $static.metadata.endDate }} |
        Virtual Event
      </Typography>
      <Typography
        class="splash__heading"
        type="heading1"
        as="h1"
        color="teal"
        transform="uppercase"
      >
        Hack The 6ix
      </Typography>
      <Typography class="splash__hack" type="heading3" as="p">
        We hack to
        <span class="splash__scroll-frame">
          <Typography
            :style="{ '--offset': `${(-100 / text.length) * textIndex}%` }"
            :class="[
              animateText && 'splash__scroll--animate',
              'splash__scroll',
            ]"
            type="heading3"
            color="yellow"
          >
            <span v-for="(line, index) in text" :key="index">
              {{ line }}.
            </span>
          </Typography>
        </span>
      </Typography>
      <div class="splash__form">
        <a href="https://dash.hackthe6ix.com" target="_blank" class="splash__apply_a">
          <Button class="splash__apply_button">
            Apply Now
          </Button>
        </a>
        <Typography type="paragraph" as="p">
          *Applications close on July 24 2021, 11:59 PM EDT
        </Typography>
      </div>
      <ul class="splash__icons">
        <li v-for="(icon, index) in icons" :key="index">
          <a
            rel="noreferrer noopener"
            :aria-label="icon.label"
            class="splash__icon"
            target="_blank"
            :href="icon.to"
          >
            <component :is="icon.icon" />
          </a>
        </li>
      </ul>
      <Button
        @click="scrollToAbout"
        class="splash__more"
        leftIcon="arrow-down"
        type="ghost"
      >
        Learn more
      </Button>
    </div>
    <img :src="require('@/assets/splash-hd.gif')" class="splash__image" />
  </Section>
</template>

<static-query>
{
  metadata {
    startDate(format: "MMMM D")
    endDate(format: "D, YYYY")
  }
}
</static-query>

<script>
import FacebookIcon from '@/assets/facebook.svg';
import InstagramIcon from '@/assets/instagram.svg';
import LinkedInIcon from '@/assets/linkedin.svg';
import TwitterIcon from '@/assets/twitter.svg';
import Typography from '@/components/Typography';
import MailForm from '@/components/MailForm';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Input from '@/components/Input';

export default {
  name: 'Splash',
  components: {
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
    Typography,
    Section,
    Button,
    Input,
    MailForm,
  },
  data() {
    return {
      animateText: true,
      textIndex: 0,
    };
  },
  mounted() {
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        this.textIndex = (this.textIndex + 1) % this.text.length;
      });
    }, 2000);
  },
  methods: {
    scrollToAbout() {
      document.getElementById('faq').scrollIntoView();
    },
  },
  computed: {
    text() {
      return [
        'network',
        'learn',
        'win',
        'create a project',
        'collaborate',
        'network',
      ];
    },
    icons() {
      return [
        {
          icon: FacebookIcon,
          label: 'HT6 facebook account',
          to: 'https://www.facebook.com/HackThe6ix',
        },
        {
          icon: InstagramIcon,
          label: 'HT6 instagram account',
          to: 'https://www.instagram.com/hackthe6ix',
        },
        {
          icon: TwitterIcon,
          label: 'HT6 twitter account',
          to: 'https://twitter.com/HackThe6ix',
        },
        {
          icon: LinkedInIcon,
          label: 'HT6 linkedin account',
          to: 'https://linkedin.com/company/hackthe6ixofficial',
        },
      ];
    },
  },
  watch: {
    textIndex(newVal) {
      this.animateText = newVal !== 0;
      window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          this.textIndex = (this.textIndex + 1) % this.text.length;
        });
      }, newVal && 2000);
    },
  },
};
</script>

<style lang="scss">
@use '@/styles/mixins';
@use '@/styles/units';

.splash {
  padding-top: units.spacing(37.5);
  @include mixins.media(laptop) {
    padding-top: units.spacing(16);
  }

  & > div {
    grid-template-columns: minmax(auto, units.spacing(130)) auto;
    grid-gap: units.spacing(15);
    display: grid;
    @include mixins.media(laptop) {
      grid-template-columns: minmax(1px, 1fr);
    }
  }

  &__button {
    margin-bottom: auto;
  }

  &__hack {
    grid-template-columns: auto 1fr;
    grid-gap: units.spacing(2);
    display: grid;
    overflow: hidden;
  }

  &__scroll {
    &--animate {
      @include mixins.transition(transform, slow);
    }
    transform: translateY(var(--offset));
    flex-direction: column;
    display: flex;

    &-frame {
      height: 1px;
    }
  }

  &__image {
    width: 100%;
    height: auto;
    max-width: units.spacing(140);
    margin: 0 auto;

    @include mixins.media(laptop) {
      max-width: units.spacing(120);
      grid-row: 1;
      margin: 0;
    }
  }

  &__heading {
    margin: units.spacing(4) 0 units.spacing(6);
  }

  &__apply_a {
    text-decoration: none;
  }

  &__apply_button {
    margin-bottom: units.spacing(3);

    @include mixins.media(phone) {
      width: 100%;
    }
  }

  &__form {
    margin-top: units.spacing(9.5);
    margin-bottom: units.spacing(9.5);
  }

  &__icons {
    display: grid;
    grid-auto-columns: units.spacing(6);
    grid-auto-rows: units.spacing(6);
    grid-gap: units.spacing(4);
    grid-auto-flow: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  &__icon {
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &__more {
    margin-top: units.spacing(20);
    padding: 0;
  }
}
</style>
