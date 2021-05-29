<template>
  <Section class='splash' as='section'>
    <div class='splash__content'>
      <Typography type='heading3' as='p'>
        {{ $static.metadata.startDate }}-{{ $static.metadata.endDate }} | Virtual Event
      </Typography>
      <Typography class='splash__heading' type='heading1' as='h1' color='teal' transform='uppercase'>
        Hack The 6ix
      </Typography>
      <Typography class='splash__hack' type='heading3' as='p'>
        We hack to <span class='splash__scroll-frame'>
          <Typography
            :style='{ "--offset": `${-100 / text.length * textIndex}%` }'
            :class='[
              animateText && "splash__scroll--animate",
              "splash__scroll",
            ]'
            type='heading3'
            color='yellow'
          >
            <span
              v-for='(line, index) in text'
              :key='index'
            >
              {{line}}.
            </span>
          </Typography>
        </span>
      </Typography>
      <div class='splash__form'>
        <Typography type='paragraph' as='p'>
          Applications aren't open yet. Subscribe to know when it does!
        </Typography>
        <div class='splash__input'>
          <Input
            placeholder='Enter your email'
            label='Join our mailing list'
            v-model='email'
            name='email'
            :error="emailError"
          />
          <Button class='splash__button' @click="triggerSubscribe" :disabled='!email'>Notify Me</Button>
        </div>
      </div>
      <ul class='splash__icons'>
        <li
          v-for='(icon, index) in icons'
          :key='index'
        >
          <a
            rel='noreferrer noopener'
            :aria-label='icon.label'
            class='splash__icon'
            target='_blank'
            :href='icon.to'
          >
            <component :is='icon.icon'/>
          </a>
        </li>
      </ul>
      <Button
        @click='scrollToAbout'
        class='splash__more'
        leftIcon='arrow-down'
        type='ghost'
      >
        Learn more
      </Button>
    </div>
    <div class='splash__image'>
      <Table class='splash__image-table' />
      <img :src='require("@/assets/window.gif")' class='splash__image-window' />
    </div>
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
import {subscribe} from "../util/email_controller";
import FacebookIcon from '@/assets/facebook.svg';
import InstagramIcon from '@/assets/instagram.svg';
import LinkedInIcon from '@/assets/linkedin.svg';
import TwitterIcon from '@/assets/twitter.svg';
import Table from '@/assets/table.svg';
import Typography from '@/components/Typography';
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
    Table,
    Typography,
    Section,
    Button,
    Input,
  },
  data() {
    return {
      animateText: true,
      textIndex: 0,
      email: '',
      emailError: undefined
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
      document.getElementById("about").scrollIntoView();
    },
    triggerSubscribe() {
      subscribe(this.email, (err, message) => {

        console.log(err.response, message)

        if (err) {
          // Error
          this.emailError = err.response.data || "An error occurred - please try again later";

        } else {
          // Success

        }

      });
    }
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
    }
  },
  watch: {
    email(newVal) {
      console.log(newVal);
    },
    textIndex(newVal) {
      this.animateText = newVal !== 0;
      window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          this.textIndex = (this.textIndex + 1) % this.text.length;
        });
      }, newVal && 2000);
    }
  }
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
      display: flex;
      margin-top: 20%;
      margin-bottom: -20%;
      height: fit-content;

      @include mixins.media(laptop) {
        grid-row: 1;
      }

      &-window {
        box-sizing: border-box;
        position: relative;
        margin-left: auto;
        flex-grow: 4;
        flex-basis: 1px;
        transform: translate(-10%, -24%);
        min-width: 1px;
      }

      &-table {
        flex-grow: 3;
        flex-basis: 1px;
        min-width: 1px;
        transform: translate(10%);
      }
    }

    &__heading {
      margin: units.spacing(4) 0 units.spacing(6);
    }

    &__form {
      margin-top: units.spacing(9.5);
    }

    &__input {
      display: grid;
      grid-template-columns: 55% max-content;
      grid-gap: units.spacing(1.5);
      margin: units.spacing(2) 0 units.spacing(4.5);
      max-width: units.spacing(120);
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
