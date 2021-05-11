<template>
  <div>
    <Section class='nav' as='nav'>
      <g-link to='/#top' class='nav__logo'>
        <Icon width='24'/>
        <Typography
          type='heading3'
          transform='uppercase'
          color='yellow'
        >
          <Typography type='heading3' color='teal'>
            HT6
          </Typography> Digital
        </Typography>
      </g-link>
      <ul class='nav__links'>
        <li v-for='(link, index) in links' :key='index'>
          <g-link
            exact-active-class='nav__link--active'
            class='nav__link'
            :to='link.to'
            exact
          >
            {{ link.label }}
          </g-link>
        </li>
      </ul>
    </Section>
    <slot/>
    <footer class='footer'>
      <Section class='footer__mail'>
        <Typography type='heading3' color='light-yellow' as='h2'>
          Interested? Get the latest updates in your inbox!
        </Typography>
        <form class='footer__mail-form'>
          <Input
            placeholder='Enter your email'
            label='Subscribe to inbox'
            v-model='email'
            name='email'
          />
          <Button>
            Notify Me
          </Button>
        </form>
        <div class='footer__top'>
          <Button @click='toTop' type='ghost'>Back to Top</Button>
        </div>
      </Section>
      <Section>
        <div class='footer__main'>
          <div class='footer__main-logo'>
            <Typography type='heading2' as='h2' color='teal' transform='uppercase'>
              Hack the 6ix
            </Typography>
            <ul class='footer__socials'>
              <li
                v-for='(icon, index) in socials'
                :key='index'
              >
                <a
                  rel='noreferrer noopener'
                  :aria-label='icon.label'
                  class='footer__social'
                  target='_blank'
                  :href='icon.to'
                >
                  <component :is='icon.icon'/>
                </a>
              </li>
            </ul>
          </div>
          <form class='footer__main-form'>
            <Typography class='footer__main-form--header' type='heading3' as='h3' color='light-yellow' transform='uppercase'>
              More questions?
            </Typography>
            <Input class='footer__main-form--name' name='more_name' placeholder='Enter your name' label='Name' v-model='more_name' showLabel/>
            <Input class='footer__main-form--email' name='more_email' placeholder='Enter your email' label='Email' v-model='more_email' showLabel required/>
            <Input class='footer__main-form--question' name='more_question' placeholder='Send us your questions here!' label='Enter your question here' v-model='more_questions'/>
            <div class='footer__main-form--footer'>
              <Button>Send</Button>
            </div>
          </form>
        </div>
        <div class='footer__meta'>
          <Typography class='footer__meta-copyright' type='paragraph'>
            Copyright © 2021 <strong>Hack the 6ix</strong> | Made with ♡ in Toronto
          </Typography>
          <ul class='footer__meta-links'>
            <Typography type='paragraph' as='li'>
              <a class='footer__meta-link' href='https://2020.hackthe6ix.com/' target='_blank' rel='noreferrer noopenner'>
                2020 Website
              </a>
            </Typography>
            <Typography type='paragraph' as='li'>
              <a class='footer__meta-link' href='https://2020.hackthe6ix.com/privacy-policy.pdf' target='_blank' rel='noreferrer noopenner'>
                Privacy Policy
              </a>
            </Typography>
            <Typography type='paragraph' as='li'>
              <a class='footer__meta-link' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' target='_blank' rel='noreferrer noopenner'>
                Code of Conduct
              </a>
            </Typography>
          </ul>
        </div>
      </Section>
    </footer>
  </div>
</template>

<script>
import FacebookIcon from '@/assets/facebook.svg';
import InstagramIcon from '@/assets/instagram.svg';
import LinkedInIcon from '@/assets/linkedin.svg';
import TwitterIcon from '@/assets/twitter.svg';
import Typography from '@/components/Typography';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Icon from '@/assets/icon.svg';

export default {
  name: 'Layout',
  components: {
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
    Typography,
    Section,
    Button,
    Input,
    Icon,
  },
  data() {
    return {
      email: '',
      more_name: '',
      more_email: '',
      more_text: '',
    };
  },
  mounted() {
    window.setTimeout(() => {
      document.body.classList.add('animate');
    }, 100);
  },
  computed: {
    socials() {
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
          label: 'Past Keynotes',
          to: '/#past-keynotes',
        },
        {
          label: 'FAQ',
          to: '/#faq',
        },
      ];
    },
  },
  methods: {
      toTop() {
        console.log('owo');
        document.getElementById("top").scrollIntoView();
      },
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

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: colors.css-color(white);
  font-family: units.$font;
  padding: 0;
  margin: 0;
}

.nav {
  padding-bottom: units.spacing(2.5);
  padding-top: units.spacing(2.5);
  position: sticky;
  z-index: 100;
  top: 0;

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

  &__links {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  &__link {
    @each $t, $v in map-get(units.$font-config, heading4) {
      #{$t}: $v;
    }
    padding: units.spacing(1.5) units.spacing(4);
    border-bottom: 2px solid transparent;
    margin-left: units.spacing(2);
    text-decoration: none;
    color: inherit;

    &--active, &:hover {
      border-color: colors.css-color(teal);
      color: colors.css-color(teal);
    }
  }
}

.footer {
  background-color: colors.css-color(footer);
  &__mail {
    background: colors.css-color(darker-teal);
    padding-top: units.spacing(12);

    & .content {
      flex-direction: column;
      align-items: center;
      display: flex;
    }

    &-form {
      grid-template-columns: 5fr 3fr;
      grid-gap: units.spacing(1.5);
      width: 100%;
      margin-top: units.spacing(11);
      max-width: units.spacing(95);
      display: grid;
    }
  }

  &__top {
    display: flex;
    justify-content: flex-end;
    margin: units.spacing(2) 0;
    width: 100%;
  }

  &__main {
    display: flex;
    padding-top: units.spacing(13.5);

    &-logo {
      flex-grow: 2;
    }

    &-form {
      grid-template-areas:
        'header header'
        'name email'
        'question question'
        'footer footer';
      grid-gap: units.spacing(6) units.spacing(4);
      display: grid;
      flex-grow: 1;

      &--header {
        grid-area: header;
      }

      &--name {
        grid-area: name;
      }

      &--email {
        grid-area: email;
      }

      &--question {
        grid-area: question;
      }

      &--footer {
        grid-area: footer;
        display: flex;
        justify-content: flex-end;
      }
    }
  }

  &__socials {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: units.spacing(8) 0 0;
  }

  &__social {
    width: units.spacing(9);
    height: units.spacing(9);
    margin-right: units.spacing(9);
    display: flex;
    align-items: center;
    color: colors.css-color(white);
  }

  &__meta {
    margin: units.spacing(13) 0 units.spacing(8);
    display: flex;

    &-copyright {
      margin-right: auto;
    }

    &-links {
      list-style-type: none;
      overflow: hidden;
      grid-auto-flow: column dense;
      grid-gap: units.spacing(8);
      display: grid;
      padding: 0;
      margin: 0;
    }

    &-link {
      color: inherit;
      text-decoration: none;
      display: block;
    }
  }


}

@include colors.deferInit();
</style>
