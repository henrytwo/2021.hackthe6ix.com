<template>
  <Section id='why' as='section'>
    <div class="why__content">
      <Typography class='why__heading' type='heading2' color='light-yellow' transform='uppercase' as='h2'>
        Why get involved
        <Bubble class='why__bubble'/>
      </Typography>
    </div>
      <div class='why__card-wrapper'>
        <button class='why__arrow why__arrow--left' @click='changeSlide(-1)'>
          <LeftArrow/>
        </button>
        <div class='why__cards'>
          <div class="why__card">
            <Placeholder class='why__placeholder' width='385px' height='385px'/>
              <Typography class='why__card-heading' type='heading3' color='white' as='h3'>
                Want to land your
                next internship?
              </Typography>
              <Typography class='why__card-body' type='xsmall' color='white' as='p'>
                Hackathons are an amazing place to meet
                mentors and industry professionals in the
                tech community. A pandemic won't stop us
                from fostering important conversations.
              </Typography>
              <Laptops class="why__laptops"/>
          </div>
          <div class="why__card">
            <Placeholder class='why__placeholder' width='385px' height='385px'/>
              <Typography class='why__card-heading' type='heading3' color='white' as='h3'>
                Looking to learn from
                experts?
              </Typography>
              <Typography class='why__card-body' type='xsmall' color='white' as='p'>
                We value sharing knowledge and applying the
                things we learned. We'll host live workshops
                all weekend to give you the inspiration you
                need to get your project off the ground.
              </Typography>
              <Gears class="why__gears"/>
          </div>
          <div class="why__card">
            <Placeholder class='why__placeholder' width='385px' height='385px'/>
              <Typography class='why__card-heading' type='heading3' color='white' as='h3'>
                Want to be rewarded
                for your hard work?
              </Typography>
              <Typography class='why__card-body' type='xsmall' color='white' as='p'>
                With $38,000 worth of prizes, there’s
                something for everyone.
              </Typography>
              <Prize class="why__prize"/>
          </div>
          <div class="why__card">
            <Placeholder class='why__placeholder' width='385px' height='385px'/>
              <Typography class='why__card-heading' type='heading3' color='white' as='h3'>
                Need projects on your
                portfolio? 
              </Typography>
              <Typography class='why__card-body' type='xsmall' color='white' as='p'>
                Complete a project worth showcasing within
                48 hours from scratch and land your next job.
                Check out what our hackers created last year!
              </Typography>
              <Button class='why__projects'>
                2020 project gallery
              </Button>
          </div>
          <div class="why__card">
            <Placeholder class='why__placeholder' width='385px' height='385px'/>
              <Typography class='why__card-heading' type='heading3' color='white' as='h3'>
                Feeling stuck at home?
              </Typography>
              <Typography class='why__card-body' type='xsmall' color='white' as='p'>
                Physical distancing is serious, but meeting
                new people doesn't have to stop. Get geared
                up in your pajamas and make tons of virtual
                memories. 
              </Typography>
              <Camera class="why__memories"/>
          </div>
        </div>
        <button class='why__arrow why__arrow--right' @click='changeSlide(1)'>
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
  methods: {
    changeSlide(value) {
      const carousel = this.$el.querySelector(".why__cards");
      const width = carousel.offsetWidth;
      carousel.scrollTo(carousel.scrollLeft + width * value, 0);
    }
  }
};
</script>
 
<style lang="scss">
@use '@/styles/units';
@use '@/styles/colors';

#why {
    margin-top: units.spacing(74);
}

.why {
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

    &__card-wrapper {
      display: flex;


      .why__cards {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: units.spacing(3.5);
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;

        .why__placeholder {
          scroll-snap-align: center;
          background-color: #006A82;
          padding: 0;
          margin: 0;
        }

        .why__card {
          position: relative;

          .why__card-heading {
            position: absolute;
            padding: 0 25px 5px 25px;
            top: 45px;
            left: 10px;

            &:first-of-type {
              padding-right: 30px;
              padding-left: 30px;
            }

            &:last-of-type {
              padding-right: 25px;
            }
          }

          .why__card-body {
            position: absolute;
            padding: 5px 30px 10px 30px;
            top: 140px;
            left: 10px;
          }

          .why__laptops {
            position: absolute;
            bottom: 20px;
            left: 100px;
          }

          .why__gears {
            position: absolute;
            bottom: 15px;
            left: 95px;
          }

          .why__prize {
            position: absolute;
            bottom: 20px;
            left: 115px;
          }

          .why__projects {
            position: absolute;
            bottom: 85px;
            left: 66px;
          }

          .why__memories {
            position: absolute;
            bottom: 20px;
            left: 135px;
          }
        }
      }
    }

  &__arrow {
    color: colors.css-color('light-teal');
    background: none;
    cursor: pointer;
    margin: auto 0;
    border: none;
    width: 65px;
  }

  &__arrow--left {
    padding-right: 20px;
  }

  &__arrow--right {
    padding-left: 20px;
  }
}  
</style>