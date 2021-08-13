<template>
  <Section id="spotlight" class="highlight" as="section">
    <SectionHeader
      class="highlight__heading"
      bubble="Star"
      color="light-yellow"
      align="center"
    >
      Sponsor Spotlight
    </SectionHeader>
    <div class="highlight__content">
      <div class="highlight__slides">
        <button
          @click="currentSlide = (currentSlide || sponsors.length) - 1"
          class="highlight__arrow"
        >
          <LeftArrow />
        </button>
        <div class="highlight__sponsors" ref="sponsors">
          <div
            :class="[
              'highlight__sponsor',
              index === currentSlide && 'highlight__sponsor--active',
            ]"
            v-for="(data, index) in sponsors"
            :key="index"
            ref="card"
          >
            <Card
              backdropColor="light-peach"
              :placement="cardPlacement"
              class="highlight__card"
              color="light-teal"
              offset="4"
              boxed
            >
              <CardHeader
                backgroundColor="teal"
                title="our_sponsors.ppt"
                :size="headerSize"
                color="dark-navy"
              />
              <div class="highlight__body">
                <g-image class="highlight__image" :src="data.image" />
                <div class="highlight__text">
                  <Quotation class="highlight__quote highlight__quote--top" />
                  <Typography
                    class="highlight__data"
                    v-html="data.content"
                    color="black"
                    type="xsmall"
                    as="div"
                  />
                  <Quotation
                    class="highlight__quote highlight__quote--bottom"
                  />
                </div>
                <Typography color="black" type="xsmall" weight="700">
                  Check out
                  <a
                    ref="noreferrer noopener"
                    class="highlight__link"
                    :href="data.link"
                    target="_blank"
                  >
                    {{ data.name }}'s career page!
                  </a>
                </Typography>
              </div>
              <div class="highlight__dots">
                <div
                  v-for="(_, i) in sponsors"
                  :class="[i === index && 'highlight__dot--filled', 'highlight__dot']"
                  :key="i"
                />
              </div>
            </Card>
          </div>
        </div>
        <button
          @click="currentSlide = (currentSlide + 1) % sponsors.length"
          class="highlight__arrow"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  </Section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader';
import Section from '@/components/Section';
import Typography from '@/components/Typography';
import Card, { placements } from '@/components/Card';
import CardHeader, { sizes } from '@/components/CardHeader';
import RightArrow from '@/assets/right-arrow.svg';
import LeftArrow from '@/assets/left-arrow.svg';
import Quotation from '@/assets/quotation.svg';
import marked from 'marked';

export default {
  name: 'Highlight',
  components: {
    SectionHeader,
    Section,
    Typography,
    Card,
    CardHeader,
    LeftArrow,
    RightArrow,
    Quotation,
  },
  mounted() {
    window.addEventListener('resize', this.setScroll, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setScroll, { passive: true });
  },
  data() {
    return {
      currentSlide: 0,
      dirty: {},
    };
  },
  watch: {
    currentSlide() {
      this.setScroll(true);
    },
  },
  methods: {
    setScroll(smooth) {
      if (!this.dirty[this.currentSlide]) {
        this.$set(this.dirty, this.currentSlide, true);
        this.$gtag.event('view-spotlight', {
          sponsor: this.sponsors[this.currentSlide].name,
        });
      }

      const target = this.$refs.card[this.currentSlide];
      const parent = this.$refs.sponsors;
      parent.scrollTo({
        left: target.offsetLeft - parent.offsetLeft,
        behavior: smooth === true ? 'smooth' : undefined,
      });
    },
  },
  computed: {
    cardPlacement() {
      return placements.BOTTOM_LEFT;
    },
    headerSize() {
      return sizes.NORMAL;
    },
    sponsors() {
      return [
        {
          image: require('@/assets/highlight/intact.png'),
          content:
            marked(`We are here to help people, businesses and society prosper in good times and be 
            resilient in bad times. We will earn the right to be one of Canada's most respected 
            and successful companies. A company where we are true to our values, where our 
            people are engaged because they know their work matters, and where our
             customers are our advocates because they know what matters to them matters to 
             us. We will strive to provide an experience to customers that will be second to 
             none. Insurance is not about things. Insurance is about people.`),
          link: 'https://careers.intactfc.com/ca/en',
          name: 'Intact',
        },
        {
          image: require('@/assets/highlight/bmo.png'),
          content:
            marked(`BMO is a leading bank driven by a single purpose: to Boldly Grow the Good in
             business and life. Everywhere we do business, we’re focused on building, investing 
             and transforming how we work to drive performance and continue growing the 
             good.`),
          link: 'https://jobs.bmo.com/ca/en',
          name: 'BMO',
        },
        {
          image: require('@/assets/highlight/accenture.png'),
          content:
            marked(`Our purpose: To deliver on the promise of technology and human ingenuity. We
            embrace the power of change to create long-lasting value in every direction for our 
            clients, people and communities.`),
          link: `https://www.accenture.com/ca-en/careers`,
          name: 'Accenture',
        },
      ];
    },
  },
};
</script>

<style lang="scss">
@use '@/styles/mixins';
@use '@/styles/colors';
@use '@/styles/units';

.highlight {
  margin: units.spacing(44) 0 units.spacing(74);
  padding-top: units.spacing(30);

  &__heading {
    margin-bottom: units.spacing(8);
  }

  &__bubble {
    margin-bottom: units.spacing(-2);
    margin-left: units.spacing(4);
  }

  &__content {
    flex-direction: column;
    align-items: center;
    display: flex;
  }

  &__slides {
    grid-template-columns: units.spacing(10) auto units.spacing(10);
    grid-gap: units.spacing(5);
    display: grid;
  }

  &__arrow {
    color: colors.css-color(light-teal);
    background: none;
    cursor: pointer;
    margin: auto 0;
    border: none;
    padding: 0;
  }

  &__sponsors {
    grid-template-columns: repeat(5, 100%);
    max-width: units.spacing(180);
    grid-gap: units.spacing(16);
    overflow: hidden;
    display: grid;
  }

  &__card {
    height: calc(100% - #{units.spacing(4)});
  }

  &__sponsor {
    @include mixins.transition(opacity, snail);
    opacity: 0;

    &--active {
      opacity: 1;
    }
  }

  &__body {
    padding: units.spacing(8) units.spacing(15);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;

    @include mixins.media(tablet) {
      padding: units.spacing(8) units.spacing(8) units.spacing(10);
    }
  }

  &__image {
    height: units.spacing(15);
    object-fit: contain;
    max-width: 100%;
    margin: 0 auto;
    width: auto;
  }

  &__text {
    margin-top: units.spacing(6);
    position: relative;
    display: flex;
  }

  &__link {
    margin-top: units.spacing(2);
    display: inline-block;
    color: inherit;
  }

  &__data {
    z-index: 1;
  }

  &__dots {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 50%;
  }

  &__dot {
    height: units.spacing(2);
    width: units.spacing(2);
    border-radius: 999px;
    background-color: colors.css-color(black, $alpha: 0.15);
    margin: 0 units.spacing(0.5) units.spacing(5);

    &--filled {
      background-color: colors.css-color(black);
    }
  }

  &__quote {
    width: units.spacing(9);
    position: absolute;
    height: auto;
    margin: auto;

    &--top {
      inset: 0 auto auto units.spacing(-4);
    }

    &--bottom {
      inset: auto 0 0 auto;
      transform: rotate(180deg);
    }
  }
}
</style>
