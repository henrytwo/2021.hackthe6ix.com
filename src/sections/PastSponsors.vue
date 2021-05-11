<template>
  <Section class='past-sponsors' id='past-sponsors' as='section'>
    <Typography align='center' transform='uppercase' color='black' type='heading2' as='h2'>
      Past Sponsors
    </Typography>
  </Section>
</template>

<script>
import Typography from '@/components/Typography';
import Section from '@/components/Section';

export default {
  name: 'PastSponsors',
  components: {
    Typography,
    Section,
  },
};
</script>

<style lang="scss">
@use '@/styles/colors';
@use '@/styles/units';

.past-sponsors {
  background-color: colors.css-color(white);
  padding: units.spacing(18) 0;
}
</style>