PastSponsors.vue<template>
  <Section id='past-speakers' as='section'>
    <div>
      <Typography class='past-speakers__heading' type='heading2' color='light-yellow' transform='uppercase' as='h2'>
        Past Speakers
       <img class='past-speakers__bubble' src="../assets/past-speakers/megaphone-bubble.svg">
      </Typography>
    </div>
    <div class="past-speakers__speakers">
      <div class="past-speakers__card">
        <Placeholder class='past-speakers__placeholder past-speakers__placeholder--Jonathan' width='365px' height='640px' color='light-teal'/>
        <div class="past-speakers__label">
          <Typography type='heading3' color='black' as='h3'>
            Jonathan Javier
          </Typography>
          <Typography type='heading4' color='black' as='h4'>
            CEO/Founder @Wonsulting
          </Typography>
        </div>
      </div>
      <div class="past-speakers__card">
        <Placeholder class='past-speakers__placeholder past-speakers__placeholder--Cathy' width='365px' height='640px' color='light-teal'/>
        <div class="past-speakers__label">
          <Typography type='heading3' color='black' as='h3'>
            Cathy Tie
          </Typography>
          <Typography type='heading4' color='black' as='h4'>
            Serial Entreprenuer & VC
          </Typography>
        </div>
      </div>
      <div class="past-speakers__card">
        <Placeholder class='past-speakers__placeholder past-speakers__placeholder--Pei' width='365px' height='640px' color='light-teal'/>
        <div class="past-speakers__label">
          <Typography type='heading3' color='black' as='h3'>
            Pei Li
          </Typography>
          <Typography type='heading4' color='black' as='h4'>
            Founder @Hack the 6ix
          </Typography>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import Section from '@/components/Section';
import Typography from '@/components/Typography';
import Placeholder from '@/components/Placeholder';

export default {
  name: 'PastSpeakers',
  components: {
    Section,
    Typography,
    Placeholder
  },
};
</script>

<style lang="scss">
  @use '@/styles/units';

  #past-speakers {
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

  .past-speakers__heading {
    margin-bottom: units.spacing(18);
    display: flex;
    align-items: center;

    .past-speakers__bubble {
      padding-left: units.spacing(7.5);
    }
  }

  .past-speakers__speakers {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .past-speakers__card {
      position: relative;

      .past-speakers__placeholder {
        box-shadow: -8px -8px #23B5AF;
        margin-bottom: units.spacing(12.5);
      }

      &:not(:first-of-type) {
        margin-left: units.spacing(12.5);
      }

      .past-speakers__label {
        position: absolute;
        bottom: 108px;
        left: 40px;
      }

      .past-speakers__placeholder--Jonathan {
        background-image: url("../assets/past-speakers/Jonathan-Javier.png");
        background-repeat: no-repeat;
      }

      .past-speakers__placeholder--Cathy {
        background-image: url("../assets/past-speakers/Cathy-Tie.png");
        background-repeat: no-repeat;
      }

      .past-speakers__placeholder--Pei {
        background-image: url("../assets/past-speakers/Pei-Li.png");
        background-repeat: no-repeat;
      }
    }
  }

</style>