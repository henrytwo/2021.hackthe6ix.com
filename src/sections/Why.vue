<template>
  <Section id="why" class="why" as="section">
    <SectionHeader class="why__heading" bubble="Grow" color="light-yellow">
      Why get involved
    </SectionHeader>
    <div class="why__card-wrapper">
      <button class="why__arrow" @click="prevSlide">
        <LeftArrow />
      </button>
      <div ref="frame" class="why__cards-frame">
        <div ref="cards" class="why__cards">
          <Card
            class="why__card"
            v-for="(card, index) in cards"
            color="off-navy"
            :key="index"
          >
            <CardHeader
              class="why__card-header"
              backgroundColor="dark-navy"
              size="small"
            />
            <div class="why__card-body">
              <Typography type="heading3" as="h3">
                {{ card.title }}
              </Typography>
              <Typography class="why__card-text" type="small" as="p">
                {{ card.body }}
              </Typography>
              <Button
                class="why__card-show"
                v-if="card.show"
                @click="show()"
              >
                {{ card.show.text }}
              </Button>
              <component
                class="why__card-asset"
                v-if="card.asset"
                :is="card.asset"
              />
              <Button
                class="why__card-action"
                v-else-if="card.action"
                @click="to(card.action, card.action)"
              >
                {{ card.action.text }}
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <button class="why__arrow" @click="nextSlide">
        <RightArrow />
      </button>
    </div>
    <div class="why__modal" v-show="isVisible">
      <span class="why__close" @click="show()">&times;</span>
      <img src="@/assets/Why/reward/prizes.png" class="why__prizes" />
    </div>
  </Section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader';
import Section from '@/components/Section';
import Placeholder from '@/components/Placeholder';
import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import Typography from '@/components/Typography';
import RightArrow from '@/assets/right-arrow.svg';
import LeftArrow from '@/assets/left-arrow.svg';
import Camera from '@/assets/Why/home/memories.svg';
import Prize from '@/assets/Why/reward/prize.svg';
import Gears from '@/assets/Why/learn/gears.svg';
import Laptops from '@/assets/Why/internship/laptops.svg';
import Button from '@/components/Button';

export default {
  name: 'Why',
  components: {
    SectionHeader,
    Section,
    Placeholder,
    Card,
    CardHeader,
    Typography,
    RightArrow,
    LeftArrow,
    Camera,
    Prize,
    Gears,
    Laptops,
    Button,
  },
  mounted() {
    window.addEventListener('resize', this.resize, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize, { passive: true });
  },
  data() {
    return {
      curr: 0,
      limit: 3,
      isVisible: false,
    };
  },
  computed: {
    cards() {
      return [
        {
          title: 'Want to land your next internship?',
          body: "Hackathons are an amazing place to meet mentors and industry professionals in the tech community. A pandemic won't stop us from fostering important conversations.",
          asset: 'Laptops',
        },
        {
          title: 'Looking to learn from experts?',
          body: "We value sharing knowledge and applying the things we learned. We'll host live workshops all weekend to give you the inspiration you need to get your project off the ground.",
          asset: 'Gears',
        },
        {
          title: 'Want to be rewarded for your hard work?',
          body: 'With $5,000 worth of prizes, there’s something for everyone.',
          show: {
            text: 'Prizes List',
          },
          asset: 'Prize',
        },
        {
          title: 'Need projects on your portfolio?',
          body: 'Complete a project worth showcasing within 48 hours from scratch and land your next job. Check out what our hackers created last year!',
          action: {
            gtag: ['view-gallery', { section: 'why' }],
            text: '2020 Project Gallery',
            to: 'https://hackthe6ix2020.devpost.com',
          },
        },
        {
          title: 'Feeling stuck at home?',
          body: "Physical distancing is serious, but meeting new people doesn't have to stop. Get geared up in your pajamas and make tons of virtual memories.",
          asset: 'Camera',
        },
      ];
    },
  },
  methods: {
    to(action) {
      if (action.gtag) {
        this.$gtag.event(...action.gtag);
      }
      window.open(action.to, '_blank');
    },
    show() {
      this.isVisible= !this.isVisible;
    },
    handleLimit() {
      if (window.matchMedia('(min-width: 1080px)').matches) {
        this.limit = 3;
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        this.limit = 4;
      } else {
        this.limit = 5;
      }
    },
    prevSlide() {
      this.curr = (Math.min(this.curr, this.limit) || this.limit) - 1;
    },
    nextSlide() {
      const next = this.curr + 1;
      this.curr = next >= this.limit ? 0 : next;
    },
    resize() {
      this.handleLimit();
      this.setScroll(this.curr, true);
    },
    setScroll(index, hard) {
      const el = this.$refs.cards;
      const target = el.children[index];
      this.$refs.frame.scrollTo({
        behavior: hard ? 'auto' : 'smooth',
        left: target.offsetLeft - el.offsetLeft,
      });
    },
  },
  watch: {
    curr(newVal) {
      this.setScroll(newVal);
    },
  },
};
</script>

<style lang="scss">
@use '@/styles/mixins';
@use '@/styles/units';
@use '@/styles/colors';

.why {
  margin-top: units.spacing(44);
  padding-top: units.spacing(30);

  &__content {
    display: block;
  }

  &__heading {
    margin-bottom: units.spacing(19);
  }

  &__bubble {
    margin-bottom: units.spacing(-2);
    margin-left: units.spacing(4);
  }

  &__card {
    border-bottom-right-radius: units.spacing(1);
    border-bottom-left-radius: units.spacing(1);
    flex-direction: column;
    display: flex;

    &-header {
      padding-bottom: units.spacing(3);
      padding-top: units.spacing(3);
    }

    &-body {
      padding: units.spacing(5.5) units.spacing(9) units.spacing(3);
      box-sizing: border-box;
      flex-direction: column;
      align-items: center;
      display: flex;
      flex-grow: 1;
    }

    &-text {
      margin-top: units.spacing(5);
    }

    &-asset {
      padding-top: units.spacing(4);
      height: units.spacing(31.5);
      margin-top: auto;
    }

    &-action {
      margin: auto;
    }

    &-show {
      margin: auto;
    }
  }

  &__card-wrapper {
    grid-template-columns: units.spacing(10) auto units.spacing(10);
    grid-gap: units.spacing(5);
    display: grid;
  }

  &__cards-frame {
    overflow-x: hidden;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(5, 32%);
    grid-gap: 2%;

    @include mixins.media(laptop) {
      grid-template-columns: repeat(5, 49%);
    }

    @include mixins.media(tablet) {
      grid-template-columns: repeat(5, 100%);
    }
  }

  &__arrow {
    color: colors.css-color('light-teal');
    background: none;
    cursor: pointer;
    margin: auto 0;
    border: none;
  }

  &__modal {
    position: fixed;
    z-index: 1;
    padding-top: units.spacing(60);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: none;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.9); 
  }

  &__prizes {
    display: block;
    width: 100%;
    height: auto;
  }

  &__close {
    position: absolute;
    top: units.spacing(35);
    right: units.spacing(5);
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  &__close:hover,
  &__close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
