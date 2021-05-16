<template>
  <Section id='why' as='section'>
    <div class="why__main">
      <Typography class='why__heading' type='heading2' color='light-yellow' transform='uppercase' as='h2'>
        Why get involved
        <img class='why__bubble' src="../assets/Why/grow-bubble.svg">
      </Typography>
    </div>
    <div class='why__card-wrapper'>
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
            <img class="why__laptops" src="../assets/Why/internship/laptops.svg">
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
            <img class="why__gears" src="../assets/Why/learn/gears.svg">
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
            <img class="why__prize" src="../assets/Why/reward/prize.svg">
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
            <img class="why__memories" src="../assets/Why/home/memories.svg">
        </div>
      </div>
      <div class='why__button'>
        <Button class='why__left' @click='changeSlide(-1)'>
          <svg width="30px" height="105px" viewBox="0 0 28 74" stroke="teal" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
            <line x1="4" y1="37" x2="24" y2="4"/>
            <line x1="4" y1="37" x2="24" y2="70"/>
          </svg>
        </Button>
        <Button class='why__right' @click='changeSlide(1)'>
          <svg width="30px" height="105px" viewBox="0 0 28 74" stroke="teal" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
              <line x1="24" y1="37" x2="4" y2="4"/>
              <line x1="24" y1="37" x2="4" y2="70"/>
          </svg>
        </Button>
      </div>
    </div>
  </Section>
</template>

<script>
import Section from '@/components/Section';
import Placeholder from '@/components/Placeholder';
import Typography from '@/components/Typography';

export default {
  name: 'Why',
  components: {
    Section,
    Placeholder,
    Typography
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

  #why {
    margin-top: units.spacing(74);

    & > div {
      display: block;
    }
  }
</style>

<style lang="scss" scoped>
@use '@/styles/units';

.why__heading {
  margin-bottom: units.spacing(19);
  display: flex;
  align-items: center;

  .why__bubble {
    padding-left: 30px;
  }
}

.why__card-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: left;
  

  .why__cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: units.spacing(9);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    .why__placeholder {
      scroll-snap-align: center;
      background-color: #006A82;
      padding: 8px;
    }

    .why__card {
      position: relative;

      .why__card-heading {
        position: absolute;
        padding: 0 25px 10px 25px;
        top: 45px;
        left: 25px;

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
        padding: 10px 45px 10px 45px;
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
        bottom: 20px;
        left: 120px;
      }

      .why__prize {
        position: absolute;
        bottom: 20px;
        left: 115px;
      }

      .why__memories {
        position: absolute;
        bottom: 20px;
        left: 135px;
      }
    }
  }
  
  .why__button {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 35%;

    .why__left, .why__right {
      background-color: transparent;
      border: none;
    }
  }
}  
</style>