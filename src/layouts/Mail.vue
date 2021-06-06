<template>
  <Section class='mail' no_scrollspy>
    <Typography type='heading3' color='light-yellow' as='h2'>
      Interested? Get the latest updates in your inbox!
    </Typography>
    <MailForm class="mail__form"/>
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
import MailForm from '@/components/MailForm';

export default {
  name: 'Mail',
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  },
  components: {
    Typography,
    Section,
    Button,
    Input,
    MailForm
  },
}
</script>

<style lang="scss">
@use '~/styles/colors';
@use '~/styles/units';

.mail {
  background: colors.css-color(darker-teal);
  padding-top: units.spacing(12);
  text-align: center;

  & .content {
    flex-direction: column;
    align-items: center;
    display: flex;
  }

  &__button {
    margin-bottom: auto;
  }

  &__form {
    grid-template-columns: 5fr 3fr;
    grid-gap: units.spacing(1.5);
    width: 100%;
    margin-top: units.spacing(11);
    max-width: units.spacing(95);
    display: grid;
    margin-left: auto;
    margin-right: auto;
  }

  &__top {
    display: flex;
    justify-content: flex-end;
    margin: units.spacing(2) 0;
    width: 100%;
  }
}
</style>
