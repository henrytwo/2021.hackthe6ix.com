<template>
  <Section class='mail'>
    <Typography type='heading3' color='light-yellow' as='h2'>
      Interested? Get the latest updates in your inbox!
    </Typography>
    <form class='mail__form'>
      <Input
        placeholder='Enter your email'
        label='Subscribe to inbox'
        v-model='email'
        name='email'
      />
      <Button class='mail__button'>
        Notify Me
      </Button>
    </form>
    <div class='mail__top'>
      <Button @click='toTop' leftIcon='arrow-up' type='ghost'>Back to Top</Button>
    </div>
  </Section>
</template>

<script>
import Typography from '@/components/Typography';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Input from '@/components/Input';

export default {
  name: 'Mail',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
  },
  components: {
    Typography,
    Section,
    Button,
    Input,
  },
}
</script>

<style lang="scss">
@use '~/styles/colors';
@use '~/styles/units';

.mail {
  background: colors.css-color(darker-teal);
  padding-top: units.spacing(12);

  & .content {
    flex-direction: column;
    align-items: center;
    display: flex;
  }

  &__form {
    grid-template-columns: 5fr 3fr;
    grid-gap: units.spacing(1.5);
    width: 100%;
    margin-top: units.spacing(11);
    max-width: units.spacing(95);
    display: grid;
  }

  &__button {
    margin-bottom: auto;
  }

  &__top {
    display: flex;
    justify-content: flex-end;
    margin: units.spacing(2) 0;
    width: 100%;
  }
}
</style>