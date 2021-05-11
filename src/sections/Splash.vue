<template>
  <Section id='top' class='splash' as='section'>
    <div class='splash__content'>
      <Typography type='heading3' as='p'>
        {{ $static.metadata.startDate }}-{{ $static.metadata.endDate }} | Virtual Event
      </Typography>
      <Typography class='splash__heading' type='heading1' as='h1' color='teal' transform='uppercase'>
        Hack The 6ix
      </Typography>
      <Typography type='heading3' as='p'>
        We hack to <Typography type='heading3' color='yellow'>network.</Typography>
      </Typography>
      <form class='splash__form'>
        <Typography type='paragraph' as='p'>
          Applications aren't open yet. Subscribe to know when it does!
        </Typography>
        <div class='splash__input'>
          <Input
            placeholder='Enter your email'
            label='Join our mailing list'
            v-model='email'
            name='email'
          />
          <Button :disabled='!!email'>Notify Me</Button>
        </div>
      </form>
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
    <img class='splash__image' src='https://www.icegif.com/wp-content/uploads/icegif-10.gif'/>
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
  },
  data() {
    return {
      email: '',
    };
  },
  methods: {
    scrollToAbout() {
      document.getElementById("about").scrollIntoView();
    },
  },
  computed: {
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
    }
  }
};
</script>

<style lang="scss">
  @use '@/styles/units';

  .splash {
    padding-top: units.spacing(37.5);

    & > div {
      grid-template-columns: minmax(auto, units.spacing(130)) auto;
      grid-gap: units.spacing(15);
      display: grid;
    }
  }

  .splash {
    padding-top: units.spacing(37.5);

     & > div {
      grid-template-columns: minmax(auto, units.spacing(130)) auto;
      grid-gap: units.spacing(15);
      display: grid;
    }
  
    &__image {
      width: 100%;
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