<template>
  <Section class="past-speakers" id="past-speakers" as="section">
    <SectionHeader class="past-speakers__heading" color='light-yellow' align='center' bubble='Megaphone'>
      Past Speakers
    </SectionHeader>
    <div
      class="past-speakers__speakers"
      :style="{ '--card-offset': `-${offset}px` }"
    >
      <Card
        v-for="(speaker, index) in speakers"
        class="past-speakers__speaker"
        :placement="cardPlacement"
        backdropColor="navy"
        color="light-teal"
        :key="index"
        offset="2"
        boxed
      >
        <div tabindex="0" class="past-speakers__frame">
          <g-image
            class="past-speakers__image"
            :src="speaker.image"
            width="200"
          />
          <div class="past-speakers__card">
            <div class="past-speakers__label" ref="label">
              <Typography type="heading3" as="h3" color="black">
                {{ speaker.title }}
              </Typography>
              <Typography
                class="past-speakers__subtitle"
                type="heading4"
                as="p"
                color="dark-navy"
              >
                {{ speaker.subtitle }}
              </Typography>
            </div>
            <Typography
              class="past-speakers__text"
              type="body1"
              color="black"
              as="div"
              v-html="speaker.description"
            />
          </div>
        </div>
      </Card>
    </div>
  </Section>
</template>

<script>
import marked from 'marked';
import SectionHeader from '@/components/SectionHeader';
import Card, { placements } from '@/components/Card';
import Typography from '@/components/Typography';
import Section from '@/components/Section';

export default {
  name: 'PastSpeakers',
  components: {
    SectionHeader,
    Typography,
    Section,
    Card,
  },
  mounted() {
    window.addEventListener('resize', this.setOffset, { passive: true });
    this.setOffset();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setOffset, { passive: true });
  },
  data() {
    return {
      offset: 0,
    };
  },
  methods: {
    setOffset() {
      this.offset = Math.min(...this.$refs.label.map((el) => el.offsetHeight));
    },
  },
  computed: {
    cardPlacement() {
      return placements.TOP_LEFT;
    },
    speakers() {
      return [
        {
          title: 'Jonathan Javier',
          subtitle: 'CEO/Founder @Wonsulting',
          image: require('@/assets/past-speakers/Jonathan-Javier.png'),
          description: marked(`
Jonathan’s mission at Wonsulting is to “turn underdogs into winners”.
He's also worked in the Strategy and Operations team at Snap, Google,
and Cisco coming from a non-target school/non-traditional background.
He works on many initiatives, providing advice and words of wisdom on
LinkedIn and through speaking engagements. In total, he has led 125+
workshops in 8 different countries including the Mena ICT Forum in
Jordan, Resume/Personal Branding at Cisco, LinkedIn Strategy &
Operations Offsite, Great Place To Work, Talks at Google, TEDx, and
more. He's amassed 52,000+ followers on LinkedIn as well as 15+
million views yearly on his content.
          `),
        },
        {
          title: 'Cathy Tie',
          subtitle: 'Serial Entreprenuer & VC',
          image: require('@/assets/past-speakers/Cathy-Tie.png'),
          description: marked(`
Cathy is a serial entrepreneur and VC working on a new stealth company.
She was most recently a Partner at Cervin Ventures, a $200M technology
investment fund based in San Francisco. Prior to Cervin Ventures, Cathy
was the CEO and co-founder at Ranomics, a venture backed company known
for its gene variant synthesis platform that enables antibody
optimization, drug target validation, and enzyme, protein and organism
engineering. Cathy founded Ranomics at the age of 18, and was the
youngest person to raise venture capital in biotechnology. Cathy was
also named a Thiel Fellow in 2015 and a recipient of the Forbes
30 Under 30 list award in 2018.
          `),
        },
        {
          title: 'Pei Li',
          subtitle: 'Founder @Hack the 6ix',
          image: require('@/assets/past-speakers/Pei-Li.png'),
          description: marked(`
Pei founded Hack The 6ix during his time in the EngSci program at
University of Toronto. He dropped out in 2016 to join Wealthsimple in
its early stages and to pursue entrepreneurship. In 2017, Pei founded
Beatcamp, a music licensing platform for hip-hop producers. After the
platform was acquired in 2018, he founded CodeMode, a technology
consultancy that specializes in digital transformation for enterprises.
Pei is now working on Venue, an all-in-one live online events streaming
platform. They are working closely with early customers such as TechTO
to deliver a unique and engaging experience to event attendees.
          `),
        },
      ];
    },
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
  $self: &;

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__heading {
    margin-bottom: units.spacing(18);
  }

  &__bubble {
    margin-bottom: units.spacing(-2);
    margin-left: units.spacing(4);
  }

  &__speakers {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: units.spacing(10);
    display: grid;

    @include mixins.media(laptop) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mixins.media(tablet) {
      grid-template-columns: 1fr;
    }
  }

  &__speaker {
    min-width: 1px;
    @include mixins.media(tablet) {
      max-width: units.spacing(110);
      margin: 0 auto;
    }
  }

  &__frame {
    justify-content: center;
    position: relative;
    overflow: hidden;
    display: flex;
    height: 100%;

    &:hover > #{$self}__card,
    &:focus > #{$self}__card {
      transform: translateY(0);
    }
  }

  &__image {
    position: absolute;
    object-fit: cover;
    display: flex;
    height: 100%;
    width: 100%;
  }

  &__card {
    @include mixins.transition(transform);
    padding: 0 units.spacing(9) units.spacing(12);
    background-color: colors.css-color(light-teal);
    justify-content: flex-start;
    align-content: flex-start;
    flex-direction: column;
    display: flex;
    z-index: 1;

    transform: translateY(100%) translateY(var(--card-offset));
  }

  &__label {
    padding: units.spacing(7) 0;
  }

  &__subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__text {
    & p {
      margin: 0;
    }
  }
}
</style>
