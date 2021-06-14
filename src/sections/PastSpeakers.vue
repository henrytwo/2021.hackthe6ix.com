<template>
  <Section class='past-speakers' id='past-speakers' as='section'>
    <div class="past-speakers__content">
      <Typography class='past-speakers__heading' type='heading2' color='light-yellow' transform='uppercase' as='h2'>
        Past Speakers
       <Bubble class='past-speakers__bubble'/>
      </Typography>
    </div>
    <div class="past-speakers__speakers">
      <Card
        class="past-speakers__speaker"
        v-for='(speaker, index) in speakers' 
        :key='index'
        :placement='cardPlacement'
        backdropColor='teal'
        offset='1.5'
        color='light-teal'
      >
        <div class='past-speakers__body'></div>
        <img class='past-speakers__image' :src='speaker.image'/>
        <div class='past-speakers__overlay'>
          <div class="past-speakers__label">
          <Typography 
            v-html='speaker.name'
            type='heading3' 
            color='black' 
            as='h3'
          />
          <Typography
            class='past-speakers__label--who'
            v-html='speaker.who'
            type='heading4'
            color='dark-navy'
            as='h4'
          />
          <Typography
            v-html='speaker.content'
            type='paragraph'
            color='black'
            as='p'
          />
          </div>
        </div>
      </Card>
    </div>
  </Section>
</template>

<script>
import Section from '@/components/Section';
import Typography from '@/components/Typography';
import Placeholder from '@/components/Placeholder';
import Card, { placements } from '@/components/Card';
import Bubble from '@/assets/past-speakers/megaphone-bubble.svg';

export default {
  name: 'PastSpeakers',
  components: {
    Section,
    Typography,
    Placeholder,
    Bubble,
    Card
  },
  computed: {
    cardPlacement() {
      return placements.TOP_LEFT;
    },
    speakers () {
      return [
        {
          image: require('@/assets/past-speakers/Jonathan-Javier.png'),
          name: 'Jonathan Javier',
          who: 'CEO/Founder @ Wonsulting',
          content: `Jonathan’s mission at Wonsulting is to “turn underdogs into winners”.
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
              views yearly on his content.`
        },
        {
          image: require('@/assets/past-speakers/Cathy-Tie.png'),
          name: 'Cathy Tie',
          who: 'CEO/Founder @ Wonsulting',
          content: `Cathy is a serial entrepreneur and VC working on a
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
              list award in 2018.`
        },
        {
          image: require('@/assets/past-speakers/Pei-Li.png'),
          name: 'Pei Li',
          who: 'Founder @ Hack The 6ix',
          content: `Pei founded Hack The 6ix during his time in the EngSci
              program at  University of Toronto. He dropped out in 2016
              to join Wealthsimple in its early stages and to pursue
              entrepreneurship. In 2017, Pei founded Beatcamp, a music
              licensing platform for hip-hop producers. After the platform
              was acquired in 2018, he founded CodeMode, a technology consultancy
              that specializes in digital transformation for enterprises.
              Pei is now working on Venue, an all-in-one live online events
              streaming platform. They are working closely with early customers
              such as TechTO to deliver a unique and engaging
              experience to event attendees.`
        }
      ];
    }
  },
};
</script>

<style lang="scss">
  @use '@/styles/mixins';
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

    &__speaker {
      position: relative;
      margin-bottom: units.spacing(8);
      padding-bottom: units.spacing(35);
      overflow-y: hidden;
      box-shadow: units.spacing(-2) units.spacing(-2) colors.css-color('teal');
      
      &:not(:first-of-type) {
        margin-left: units.spacing(12.5);

        @include mixins.media(laptop) {
          margin-left: units.spacing(6);
        }

        @include mixins.media(tablet) {
          margin-left: 0;
        }
      }
    }

    &__body {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      
      &:hover {
        ~ .past-speakers__overlay {
          transform: translate3d(0, 0, 0);
        }
      }
    }

    &__label {
      padding: units.spacing(8) units.spacing(8) units.spacing(8) units.spacing(8);
      margin: 0;
      display: block;

      @include mixins.media(phone) {
        padding-top: units.spacing(6);
      }
    }

    &__label--who {
      padding-bottom: units.spacing(8);

      @include mixins.media(tablet) {
        padding-bottom: units.spacing(12);
      }
    }

    &__overlay {
      display: flex;
      flex-direction: column;
      justify-content: left;
      height: 100%;
      position: absolute;
      width: 100%;
      top: 0;
      background-color: colors.css-color('light-teal');
      transition: transform 300ms;
      transform: translate3d(0, 79%, 0);

      @include mixins.media(phone) {
        transform: translate3d(0, 83%, 0);
      }
    }
  }

</style>
