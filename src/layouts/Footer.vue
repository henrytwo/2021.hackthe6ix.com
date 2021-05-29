<template>
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
      <div class='footer__main-form'>
        <Typography class='footer__main-form--header' type='heading3' as='h3' color='light-yellow' transform='uppercase'>
          More questions?
        </Typography>
        <Input
          class='footer__main-form--name'
          name='name'
          placeholder='Enter your name'
          :error="nameError"
          label='Name'
          v-model='name'
          showLabel
          required
        />
        <Input
          class='footer__main-form--email'
          name='email'
          placeholder='Enter your email'
          :error="emailError"
          label='Email'
          v-model='email'
          success='owo wats dis?'
          showLabel
          required
        />
        <Input
          as='textarea'
          class='footer__main-form--question'
          name='question'
          placeholder='Send us your questions here!'
          :error="textError"
          label='Enter your question here'
          v-model='text'
          showLabel
          required
        />
        <div class='footer__main-form--footer'>
          <Button :disabled="!this.text || !this.name || !this.email" @click="triggerContactMessage">Send</Button>
        </div>
      </div>
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
          <a class='footer__meta-link' href='http://cdn.hackthe6ix.com/privacy-policy.pdf' target='_blank' rel='noreferrer noopenner'>
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
</template>

<script>
import {contactMessage} from "../util/email_controller";
import FacebookIcon from '@/assets/facebook.svg';
import InstagramIcon from '@/assets/instagram.svg';
import LinkedInIcon from '@/assets/linkedin.svg';
import TwitterIcon from '@/assets/twitter.svg';

import Typography from '@/components/Typography';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Input from '@/components/Input';

export default {
  name: 'Footer',
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
      name: '',
      email: '',
      text: '',
      nameError: undefined,
      emailError: undefined,
      textError: undefined
    };
  },
  methods: {
    triggerContactMessage() {
      contactMessage(this.name, this.email, this.text, (err, message) => {

        console.log(err.response, message);

        if (err) {
          // Error
          this.textError = err.response.data || "An error occurred - please try again later";

        } else {
          // Success

        }

      });
    }
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
  },
}
</script>

<style lang="scss">
@use '~/styles/colors';
@use '~/styles/units';

.footer {
  background-color: colors.css-color(footer);

  &__main {
    display: flex;
    padding-top: units.spacing(13.5);
    flex-wrap: wrap;

    &-logo {
      padding-right: units.spacing(12);
      box-sizing: border-box;
      margin-bottom: units.spacing(10);
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
    flex-wrap: wrap;
    display: flex;

    &-copyright {
      margin-right: auto;
      padding-right: units.spacing(8);
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
</style>
