<template>
  <form class='mailform__input' v-on:submit.prevent="formTriggerSubmit">
    <Input
        placeholder='Enter your email'
        label='Join our mailing list'
        v-model='email'
        name='email'
        :error="emailError"
        :success="emailSuccess"
        :disabled="emailDisabled"
        required
    />
    <Button class='splash__button' :disabled='this.emailDisabled'>Notify Me
    </Button>
  </form>
</template>

<script>
  import Button from '@/components/Button';
  import Input from '@/components/Input';
  import { subscribe } from "../util/email_controller";
  import validator from 'email-validator';

  export default {
    name: 'MailForm',
    data() {
      return {
        email: '',
        emailError: undefined,
        emailSuccess: undefined,
        emailDisabled: false
      };
    },
    methods: {
      formTriggerSubmit() {
        if (!this.emailInvalid && !this.emailDisabled) {
          this.triggerSubscribe();
        }
      },
      triggerSubscribe() {
        this.emailDisabled = true;

        subscribe(this.email, (err, message) => {
          if (err) {
            // Error
            this.emailError = err?.response?.data || "An error occurred - please try again later";
            this.emailSuccess = undefined;
            this.emailDisabled = false;
          } else {
            // Success
            this.emailSuccess = message.data || "You have successfully subscribed!";
            this.emailError = undefined;
            this.emailDisabled = true;
          }
        });
      }
    },
    components: {
      Button,
      Input,
    },
    watch: {
      email(newVal) {
        this.emailInvalid = !validator.validate(newVal);
        this.emailSuccess = undefined;
        this.emailError = this.emailInvalid ? "Please enter a valid email" : undefined;
      },
    }
  }
</script>

<style lang="scss">
  @use '~/styles/colors';
  @use '~/styles/units';

  .mailform {
    background: colors.css-color(darker-teal);
    padding-top: units.spacing(12);

    &__input {
      display: grid;
      grid-template-columns: 55% max-content;
      grid-gap: units.spacing(1.5);
      margin: units.spacing(2) 0 units.spacing(4.5);
      max-width: units.spacing(120);
      text-align: left !important;
    }

    &__button {
      margin-bottom: auto;
    }
  }
</style>
