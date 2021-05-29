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
        email
    />
    <Button class='splash__button' @click="triggerSubscribe"
            :disabled='emailInvalid || emailDisabled'>Notify Me
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
        emailDisabled: false,
        emailInvalid: true
      };
    },
    methods: {
      formTriggerSubmit() {
        if (!this.emailInvalid && !this.emailDisabled) {
          this.triggerSubscribe();
        }
      },
      triggerSubscribe() {
        subscribe(this.email, (err, message) => {

          console.log(err, message);

          if (err) {
            // Error
            this.emailError = err?.response?.data || "An error occurred - please try again later";
            this.emailSuccess = undefined;
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
        this.emailError = undefined;
        this.emailSuccess = undefined;

        this.emailInvalid = !validator.validate(newVal);
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
    }

    &__button {
      margin-bottom: auto;
    }
  }
</style>
