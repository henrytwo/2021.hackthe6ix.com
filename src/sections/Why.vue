<template>
  <Section id='why' as='section'>
    <div>
      <Typography class='why-heading' type='heading2' color='light-yellow' transform='uppercase' as='h2'>
        Why get involved
        <img class='bubble' src="../assets/Why/grow-bubble.png">
      </Typography>
    </div>
    <div class='card-wrapper'>
      <div class='cards'>
        <Placeholder class='card' width='385px' height='385px' color='navy'/>
        <Placeholder class='card' width='385px' height='385px' color='teal'/>
        <Placeholder class='card' width='385px' height='385px' color='navy'/>
        <Placeholder class='card' width='385px' height='385px' color='navy'/>
        <Placeholder class='card' width='385px' height='385px' color='navy'/>
      </div>
      <div class='button'>
        <Button class='left' @click='changeSlide(-1)'><img src="../assets/Why/large-left-arrow.png"></Button>
        <Button class='right' @click='changeSlide(1)'><img src='../assets/Why/large-right-arrow.png'></Button>
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
      const carousel = this.$el.querySelector(".cards");
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

.why-heading {
  margin-bottom: units.spacing(19);
  display: flex;
  align-items: flex-end;

  .bubble {
    padding-left: 30px;
  }
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;

  .cards {
    margin: 0 units.spacing(6);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: units.spacing(9);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    .card {
      scroll-snap-align: center;
    }
  }

  .button {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 35%;

    .left, .right {
      background-color: transparent;
      border: none;
      margin: 0;
      padding: 0;
    } 
  }
}  
</style>