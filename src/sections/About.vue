<template>
  <Section id='about' as='section'>
    <div>
      <Typography class='about-heading' type='heading2' color='light-yellow' transform='uppercase' as='h2'>
        About us
        <Placeholder width='50px' height='80px'/>
      </Typography>
      <Typography class='about-text' type='paragraph' as='p'>
        Hack the 6ix is the largest summer student-run, not-for-profit
        hackathon now in its seventh iteration, based in Toronto. 
      </Typography>
      <Typography class='about-text' type='paragraph' as='p'>
        We take pride in the diversity and talent of our hackers, who
        help us become a key player in the Toronto tech ecosystem. We
        provide an outlet for students to present their ideas of the future. 
      </Typography>
      <Button>
        View Past Projects
      </Button>
    </div>
    <Placeholder width='100%' height='100%' color='light-teal'/>
  </Section>
</template>

<script>
import Placeholder from '@/components/Placeholder';
import Typography from '@/components/Typography';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default {
  name: 'About',
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

  #about {
    margin-top: units.spacing(74);

    & > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: units.spacing(20);
    }
  }
</style>

<style lang="scss" scoped>
@use '@/styles/units';

.about-heading {
  margin-bottom: units.spacing(8);
  align-items: flex-end;
  display: flex;
}

.about-text {
  margin-bottom: units.spacing(6);
}
</style>