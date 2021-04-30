<template>
  <Section class='splash' as='section'>
    <div class='content'>
      <Typography type='heading3' as='p'>
        {{ $static.metadata.startDate }}-{{ $static.metadata.endDate }} | Virtual Event
      </Typography>
      <Typography class='heading' type='heading1' as='h1' color='teal' transform='uppercase'>
        Hack The 6ix
      </Typography>
      <Typography type='heading3' as='p'>
        We hack to <Typography type='heading3' color='yellow'>network.</Typography>
      </Typography>
      <form class='form'>
        <Typography type='paragraph' as='p'>
          Applications aren't open yet. Subscribe to know when it does!
        </Typography>
        <div class='input'>
          <Placeholder context='input' height='40px' width='100%' color='dark-navy'/>
          <Button disabled>Notify Me</Button>
        </div>
        <div class='icons'>
          <a href='/owo' v-for='index in [1, 2, 3, 4]' :key='index'>
            <Placeholder context='icon' height='1.5rem' width='1.5rem' color='white'/>
          </a>
        </div>
      </form>
    </div>
    <img class='image' src='https://www.icegif.com/wp-content/uploads/icegif-10.gif'/>
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
import Typography from '@/components/Typography';
import Placeholder from '@/components/Placeholder';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default {
  name: 'Splash',
  components: {
    Placeholder,
    Typography,
    Section,
    Button,
  },
};
</script>

<style lang="scss">
  @use '@/styles/units';

  .splash {
    margin-top: units.spacing(37.5);

    & > div {
      display: flex;
    }
  }
</style>

<style lang="scss" scoped>
  @use '@/styles/units';

  .content {
    margin-right: units.spacing(15);
  }

  .image {
    width: 100%;
  }

  .heading {
    margin: units.spacing(4) 0 units.spacing(6);
  }

  .form {
    margin-top: units.spacing(9.5);
  }

  .input {
    display: grid;
    grid-template-columns: 55% max-content;
    grid-gap: units.spacing(1.5);
    margin: units.spacing(2) 0 units.spacing(4.5);
  }

  .icons {
    display: grid;
    grid-auto-columns: units.spacing(6);
    grid-auto-rows: units.spacing(6);
    grid-gap: units.spacing(4);
    grid-auto-flow: column;
  }
</style>