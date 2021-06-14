<template>
  <Section id='why' class='why' as='section'>
    <div class="why__content">
      <Typography class='why__heading' type='heading2' color='light-yellow' transform='uppercase' as='h2'>
        Why get involved
        <Bubble class='why__bubble'/>
      </Typography>
    </div>
      <div class='why__card-wrapper'>
        <button class='why__arrow' @click='prevSlide'>
          <LeftArrow/>
        </button>
        <div ref='frame' class="why__cards-frame">
          <div ref='cards' class='why__cards'>
            <Card class='why__card' v-for='(card, index) in cards' color='off-navy' :key='index'>
              <CardHeader class='why__card-header' backgroundColor='dark-navy' size='small' />
              <div class='why__card-body'>
                <Typography type='heading3' as='h3'>
                  {{ card.title }}
                </Typography>
                <Typography class='why__card-text' type='small' as='p'>
                  {{ card.body }}
                </Typography>
                <component class='why__card-asset' v-if='card.asset' :is='card.asset' />
                <Button class='why__card-action' v-else-if='card.action' @click='toGallery(card.action.to)'>
                  {{ card.action.text }}
                </Button>
              </div>
            </Card>
          </div>
        </div>
        <button class='why__arrow' @click='nextSlide'>
          <RightArrow/>
        </button>
      </div>
  </Section>
</template>

<script>
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
import Bubble from '@/assets/Why/grow-bubble.svg';
import Button from '@/components/Button';

export default {
  name: 'Why',
  components: {
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
    Bubble,
    Button
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
    };
  },
  computed: {
    cards() {
      return [
        {
          title: 'Want to land your next internship?',
          body: 'Hackathons are an amazing place to meet mentors and industry professionals in the tech community. A pandemic won\'t stop us from fostering important conversations.',
          asset: 'Laptops',
        },
        {
          title: 'Looking to learn from experts?',
          body: 'We value sharing knowledge and applying the things we learned. We\'ll host live workshops all weekend to give you the inspiration you need to get your project off the ground.',
          asset: 'Gears',
        },
        {
          title: 'Want to be rewarded for your hard work?',
          body: 'With $38,000 worth of prizes, there’s something for everyone.',
          asset: 'Prize',
        },
        {
          title: 'Need projects on your portfolio?',
          body: 'Complete a project worth showcasing within 48 hours from scratch and land your next job. Check out what our hackers created last year!',
          action: {
            text: '2020 Project Gallery',
            to: 'https://hackthe6ix2020.devpost.com',
          },
        },
        {
          title: 'Feeling stuck at home?',
          body: 'Physical distancing is serious, but meeting new people doesn\'t have to stop. Get geared up in your pajamas and make tons of virtual memories.',
          asset: 'Camera',
        },
      ];
    },
  },
  methods: {
    toGallery(to) {
      window.open(to, "_blank");
    },
    handleLimit() {
      if (window.matchMedia('(max-width: 768px)').matches) {
        this.limit = 4;
      } else if (window.matchMedia('(max-width: 1080px)').matches) {
        this.limit = 3;
      } else {
        this.limit = 2;
      }
    },
    prevSlide() {
      this.curr = (Math.min(this.curr, this.limit) || 1) - 1;
    },
    nextSlide() {
      this.curr = Math.min(this.curr + 1, this.limit);
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
  }
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
    display: flex;
    align-items: flex-end;
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
}  
</style>