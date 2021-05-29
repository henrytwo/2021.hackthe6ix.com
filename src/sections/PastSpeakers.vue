PastSponsors.vue<template>
  <Section class='past-speakers' id='past-speakers' as='section'>
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
        <div class="past-speakers__overlay">
          <div class='past-speakers__text'>
            <div class="past-speakers__text--label">
              <Typography type='heading3' color='black' as='h3'>
                Jonathan Javier
              </Typography>
              <Typography type='heading4' color='black' as='h4'>
                CEO/Founder @Wonsulting
              </Typography>
            </div>
            <Typography type='paragraph' color='black' as='p'>
              Jonathan’s mission at Wonsulting is to “turn underdogs into winners”. 
              He's also worked in the Strategy and 
              Operations team at Snap, Google, and Cisco coming from a non-target
              school/non-traditional background. 
              He works on many initiatives,
              providing advice and words of
              wisdom on LinkedIn and through
              speaking engagements.
              In total, he has led 125+ workshops
              in 8 different countries including the Mena
              ICT Forum in Jordan, Resume/Personal Branding
              at Cisco, LinkedIn Strategy & Operations
              Offsite, Great Place To Work, Talks at Google,
              TEDx, and more. He's amassed 52,000+ followers
              on LinkedIn as well as 15+ million
              views yearly on his content.
            </Typography>
          </div>
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
        <div class="past-speakers__overlay">
          <div class='past-speakers__text'>
            <div class="past-speakers__text--label">
              <Typography type='heading3' color='black' as='h3'>
                Cathy Tie
              </Typography>
              <Typography type='heading4' color='black' as='h4'>
                Serial Entreprenuer & VC
              </Typography>
            </div>
            <Typography type='paragraph' color='black' as='p'>
              Cathy is a serial entrepreneur and VC working on a
              new stealth company. She was most recently a Partner at
              Cervin Ventures, a $200M technology investment fund based in
              San Francisco. Prior to Cervin Ventures, Cathy was the CEO
              and co-founder at Ranomics, a venture backed company known
              for its gene variant synthesis platform that enables
              antibody optimization, drug target validation, and enzyme,
              protein and organism engineering. Cathy founded Ranomics at
              the age of 18, and was the youngest person to raise venture capital
              in biotechnology. Cathy was also named a Thiel Fellow in
              2015 and a recipient of the Forbes 30 Under 30
              list award in 2018.
            </Typography>
          </div>
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
        <div class="past-speakers__overlay">
          <div class='past-speakers__text'>
            <div class="past-speakers__text--label">
              <Typography type='heading3' color='black' as='h3'>
                Pei Li
              </Typography>
              <Typography type='heading4' color='black' as='h4'>
                Founder @Hack the 6ix
              </Typography>
            </div>
            <Typography type='paragraph' color='black' as='p'>
              Pei founded Hack The 6ix during his time in the EngSci
              program at  University of Toronto. He dropped out in 2016
              to join Wealthsimple in its early stages and to pursue
              entrepreneurship. In 2017, Pei founded Beatcamp, a music
              licensing platform for hip-hop producers. After the platform
              was acquired in 2018, he founded CodeMode, a technology consultancy
              that specializes in digital transformation for enterprises.
              Pei is now working on Venue, an all-in-one live online events
              streaming platform. They are working closely with early customers
              such as TechTO to deliver a unique and engaging
              experience to event attendees.
            </Typography>
          </div>
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
  @use '@/styles/colors';

  .past-speakers {
    margin-top: units.spacing(44);
    padding-top: units.spacing(30);

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

    &__overlay {
      position: absolute;
      bottom: 55px;
      left: 0;
      right: 0;
      background-color: colors.css-color('light-teal');
      overflow: hidden;
      width: 100%;
      height: 0;
      transition: .5s ease;
    }

    &__card:hover &__overlay {
      height: 640px;
    }

    &__text--label {
      margin-bottom: 30px;
    }

    &__text {
      position: absolute;
      top: 50%;
      left: 40%;
      transform: translate(-38%, -50%);
      width: 85%;
    }
  }

</style>