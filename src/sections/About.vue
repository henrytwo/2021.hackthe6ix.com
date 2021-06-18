<template>
  <Section id="about" class="about" as="section">
    <div class="about__main">
      <div class="about__content">
        <Typography
          class="about__heading"
          type="heading2"
          color="light-yellow"
          transform="uppercase"
          as="h2"
        >
          About us
          <Bubble width="50" heigh="80" class="about__bubble" />
        </Typography>
        <Typography class="about__text" type="paragraph" as="p">
          Hack the 6ix is the largest summer student-run, not-for-profit
          hackathon now in its seventh iteration, based in Toronto.
        </Typography>
        <Typography class="about__text" type="paragraph" as="p">
          We take pride in the diversity and talent of our hackers, who help us
          become a key player in the Toronto tech ecosystem. We provide an
          outlet for students to present their ideas of the future.
        </Typography>
        <Button @click="openGallery"> View Past Projects </Button>
      </div>
      <div class="about__slides">
        <button
          @click="currentSlide = (currentSlide || testimonials.length) - 1"
          class="about__arrow"
        >
          <LeftArrow />
        </button>
        <div class="about__testimonials" ref="items">
          <div
            v-for="(data, index) in testimonials"
            ref="card"
            :class="[
              index === currentSlide && 'about__testimonial--active',
              `about__testimonial--${index}`,
              'about__testimonial',
            ]"
            :key="index"
          >
            <Card
              backdropColor="light-peach"
              :placement="cardPlacement"
              class="about__slide-card"
              color="light-teal"
              offset="4"
              boxed
            >
              <CardHeader
                backgroundColor="teal"
                title="testimonials.ppt"
                :size="headerSize"
                color="dark-navy"
              />
              <div class="about__card">
                <img class="about__card-image" :src="data.image" />
                <div class="about__card-body">
                  <div class="about__card-content-frame">
                    <Quotation class="about__quote" />
                    <Typography
                      class="about__card-content"
                      v-html="data.content"
                      color="black"
                      type="small"
                      as="div"
                    />
                  </div>
                  <Typography type="heading4" color="black">
                    {{ data.title }}
                  </Typography>
                </div>
              </div>
              <div class="about__dots">
                <div
                  v-for="(_, i) in testimonials"
                  :class="[i === index && 'about__dot--filled', 'about__dot']"
                  :key="i"
                />
              </div>
            </Card>
          </div>
        </div>
        <button
          @click="currentSlide = (currentSlide + 1) % testimonials.length"
          class="about__arrow"
        >
          <RightArrow />
        </button>
      </div>
    </div>
    <div class="about__stats">
      <Typography type="heading3" color="light-yellow" transform="uppercase">
        Last year we attracted:
      </Typography>
      <ul class="about__stats-list">
        <Card
          v-for="(stat, index) in stats"
          :placement="statPlacement"
          backdropColor="teal"
          color="darker-navy"
          class="about__stat"
          offset="1.5"
          :key="index"
          as="li"
          boxed
        >
          <Typography align="center" type="heading2" as="p">
            {{ stat.text }}
          </Typography>
          <Typography
            align="center"
            type="heading4"
            as="p"
            color="light-yellow"
            transform="uppercase"
          >
            {{ stat.label }}
          </Typography>
        </Card>
      </ul>
    </div>
  </Section>
</template>

<script>
import marked from 'marked';
import CardHeader, { sizes } from '@/components/CardHeader';
import Card, { placements } from '@/components/Card';
import Placeholder from '@/components/Placeholder';
import Typography from '@/components/Typography';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Bubble from '@/assets/happy-face-bubble.svg';
import RightArrow from '@/assets/right-arrow.svg';
import LeftArrow from '@/assets/left-arrow.svg';
import Quotation from '@/assets/quotation.svg';

export default {
  name: 'About',
  components: {
    Quotation,
    RightArrow,
    LeftArrow,
    Bubble,
    Placeholder,
    Typography,
    CardHeader,
    Section,
    Button,
    Card,
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  mounted() {
    window.addEventListener('resize', this.setScroll, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setScroll, { passive: true });
  },
  watch: {
    currentSlide() {
      this.setScroll(true);
    },
  },
  methods: {
    setScroll(smooth) {
      const target = this.$refs.card[this.currentSlide];
      const parent = this.$refs.items;
      parent.scrollTo({
        left: target.offsetLeft - parent.offsetLeft,
        behavior: smooth === true ? 'smooth' : undefined,
      });
    },
    openGallery() {
      window.open('https://hackthe6ix2020.devpost.com', '_blank');
    },
  },
  computed: {
    cardPlacement() {
      return placements.BOTTOM_LEFT;
    },
    statPlacement() {
      return placements.TOP_LEFT;
    },
    headerSize() {
      return sizes.NORMAL;
    },
    testimonials() {
      return [
        {
          image: require('@/assets/about/wilson.png'),
          content: marked(`***Inspiring, challenging, and exciting.***

Just a few words I would use to describe the past weekend I had at Hack the 6ix,
          all from the comfort of my own home! Working on our hackathon project remotely
          was definitely a unique experience and had its own set of challenges, but it was
          super rewarding and was an incredible learning opportunity.`),
          title: 'Willson Wang, Hacker',
        },
        {
          image: require('@/assets/about/aiman.png'),
          content:
            marked(`So honoured to chat about diversity & inclusion at @HackThe6ix today.
          It's the most organized hackathon I've ever been to (from what feels like millions),
          and it's all virtual! Well-moderated, great questions, diverse backgrounds+views of
          the panelists. Kudos to the HT6 team 👏🏻`),
          title: 'Aaiman Aamir, Speaker',
        },
        {
          image: require('@/assets/about/samson.png'),
          content:
            marked(`Thank you so much for this amazing opportunity, I had such an amazing
          time this weekend. I really enjoyed my first hackathon and stepping out of my comfort
          zone and I am definitely looking to participate in more in the future. 😊`),
          title: 'Samson Hua, Hacker',
        },
        {
          image: require('@/assets/about/sam.png'),
          content:
            marked(`It was so nice to guide students through their projects, whether it
          was simply providing feedback on project ideas, or helping hackers deploy apps, connect
          their React apps to backends, and build API's for their projects, I had a great time.`),
          title: 'Sam Eskandar, Mentor',
        },
        {
          image: require('@/assets/about/aadar.png'),
          content:
            marked(`It was great experience attending a virtual hackathon this weekend.
          Made new friends with my team. I’d like to thank Hack the 6ix for giving people the
          opportunity to learn new skills and develop something unique, even with the
          current COVID-19 restrictions.`),
          title: 'Aadar Gupta, Hacker',
        },
      ];
    },
    stats() {
      return [
        {
          text: '500+',
          label: 'Hackers',
        },
        {
          text: '90+',
          label: 'Projects',
        },
        {
          text: '12',
          label: 'Timezones',
        },
        {
          text: '$46k',
          label: 'Prizes + swag',
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

.about {
  margin-top: units.spacing(44);
  padding-top: units.spacing(30);

  &__bubble {
    margin-bottom: units.spacing(-2);
    margin-left: units.spacing(4);
  }

  &__main {
    display: grid;
    grid-template-columns: 1fr units.spacing(165);
    grid-gap: units.spacing(20);
    margin-bottom: units.spacing(28);
    @include mixins.media(laptop) {
      grid-template-columns: 1fr;
    }
  }

  &__heading {
    margin-bottom: units.spacing(8);
    align-items: flex-end;
    display: flex;
  }

  &__text {
    margin-bottom: units.spacing(6);
  }

  &__slides {
    grid-template-columns: units.spacing(6) auto units.spacing(6);
    grid-gap: units.spacing(6);
    max-width: units.spacing(170);
    margin: 0 auto auto;
    display: grid;
  }

  &__testimonials {
    grid-template-columns: repeat(5, 100%);
    max-width: units.spacing(180);
    grid-gap: units.spacing(16);
    overflow: hidden;
    display: grid;
  }

  &__testimonial {
    @include mixins.transition(opacity, snail);
    opacity: 0;

    &--active {
      opacity: 1;
    }

    &--0 {
      & .about__card-content {
        font-size: units.spacing(3);
      }
    }
  }

  &__slide-card {
    height: calc(100% - #{units.spacing(4)});
    flex-direction: column;
    display: flex;
  }

  &__stats-list {
    list-style-type: none;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: units.spacing(21);
    display: grid;
    padding: 0;
    margin: units.spacing(6) 0 0;

    @include mixins.media(laptop) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: units.spacing(12);
    }

    @include mixins.media(tablet) {
      grid-template-columns: 1fr;
    }
  }

  &__stat {
    padding: units.spacing(6) units.spacing(8.5) units.spacing(7);
    box-sizing: border-box;
    display: grid;
    grid-gap: units.spacing(2);
  }

  &__arrow {
    color: colors.css-color(light-teal);
    background: none;
    cursor: pointer;
    margin: auto 0;
    border: none;
    padding: 0;
  }

  &__card {
    grid-template-columns: units.spacing(31) 1fr;
    grid-gap: units.spacing(5);
    padding: units.spacing(5);
    box-sizing: border-box;
    flex-grow: 1;
    display: grid;

    @include mixins.media(tablet) {
      grid-template-columns: 1fr;
    }
  }

  &__card-image {
    border-radius: 999px;
    margin: units.spacing(3) 0 auto;
    aspect-ratio: 1/1;
    width: 100%;

    @include mixins.media(tablet) {
      max-width: units.spacing(40);
      margin: units.spacing(3) auto 0;
    }
  }

  &__card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__card-content {
    margin-bottom: units.spacing(3);
    z-index: 1;

    & > p {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__card-content-frame {
    display: flex;
    position: relative;
  }

  &__dots {
    display: flex;
    justify-content: center;
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
    inset: units.spacing(-2) auto auto units.spacing(-4);
    position: absolute;
    margin: auto;
  }
}
</style>
