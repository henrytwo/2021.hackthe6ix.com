<template>
  <Section id='highlight' as='section'>
    <div>
      <Typography class='highlight__heading' type='heading2' color='light-yellow' transform='uppercase' as='h2'>
        Sponsor Spotlight
       <img class='highlight__bubble' src="../assets/past-speakers/megaphone-bubble.svg">
      </Typography>
    </div>
    <div class="highlight__sponsors">
      <Placeholder class='highlight__placeholder' width='100%' height='100%' color='light-teal'/>
    </div>
  </Section>
</template>

<script>
import Section from '@/components/Section';
import Typography from '@/components/Typography';
import Placeholder from '@/components/Placeholder';

export default {
  name: 'Highlight',
  components: {
    Section,
    Typography,
    Placeholder
  },
};
</script>

<style lang="scss">
  @use '@/styles/units';

  #highlight {
    margin-top: units.spacing(74);

    & > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>

<style lang="scss" scoped>
  @use '@/styles/units';

  .highlight__heading {
    display: flex;
    align-items: center;

    .highlight__bubble {
      padding-left: units.spacing(7.5);
    }
  }

</style>