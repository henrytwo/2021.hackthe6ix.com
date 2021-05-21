PastSponsors.vue<template>
  <Section id='past-speakers' as='section'>
    <div class="past-speakers__content">
      <Typography class='past-speakers__heading' type='heading2' color='light-yellow' transform='uppercase' as='h2'>
        Past Speakers
       <Bubble class='past-speakers__bubble'/>
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
import Bubble from '@/assets/past-speakers/megaphone-bubble.svg';

export default {
  name: 'PastSpeakers',
  components: {
    Section,
    Typography,
    Placeholder,
    Bubble
  },
};
</script>

<style lang="scss">
  @use '@/styles/units';

  #past-speakers {
    margin-top: units.spacing(74);
  }

  .past-speakers {

    &__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    &__heading {
      margin-bottom: units.spacing(18);
      display: flex;
      align-items: center;
    }

    &__bubble {
      margin-bottom: units.spacing(-2);
      margin-left: units.spacing(4);
    }

    &__speakers {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    &__card {
      position: relative;

      &:not(:first-of-type) {
          margin-left: units.spacing(12.5);
        }
    }

    &__placeholder {
      box-shadow: -8px -8px #23B5AF;
      margin-bottom: units.spacing(12.5);
    }


    &__label {
      position: absolute;
      bottom: 108px;
      left: 40px;
    }
    
    &__placeholder--Jonathan {
      background-image: url("../assets/past-speakers/Jonathan-Javier.png");
      background-repeat: no-repeat;
    }
    
    &__placeholder--Cathy {
      background-image: url("../assets/past-speakers/Cathy-Tie.png");
      background-repeat: no-repeat;
    }
    
    &__placeholder--Pei {
      background-image: url("../assets/past-speakers/Pei-Li.png");
      background-repeat: no-repeat;
    }
  }

</style>