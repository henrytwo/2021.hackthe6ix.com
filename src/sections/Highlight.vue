<template>
  <Section id='highlight' as='section'>
    <div class="highlight__content">
      <Typography class='highlight__heading' type='heading2' color='light-yellow' transform='uppercase' as='h2'>
        Sponsor Spotlight
       <Bubble class='highlight__bubble'/>
      </Typography>
      <div class='highlight__slides'>
          <button
            @click='currentSlide = (currentSlide || sponsors.length) - 1'
            class='highlight__arrow'
          >
            <LeftArrow/>
          </button>
          <div class='highlight__window' ref='sponsors'>
            <div
              class='highlight__sponsors'
              :style='{
                "--card-offset": currentSlide,
                "--card-width": `${width}px`,
              }'
            >
              <div
                v-for='(data, index) in sponsors'
                :class='[
                  index === currentSlide && "highlight__slide-card-container--selected",
                  "highlight__slide-card-container",
                ]'
                :key='index'
              >
                <Card
                  backdropColor='light-peach'
                  :placement='cardPlacement'
                  :class='[
                    `highlight__slide-card--${index}`,
                    "highlight__slide-card",
                  ]'
                  color='light-teal'
                  offset='4'
                  boxed
                >
                  <CardHeader
                    backgroundColor='teal'
                    title='past_sponsors.ppt'
                    :size='headerSize'
                    color='dark-navy'
                  />
                  <div class='highlight__card'>
                    <div class='highlight__card-body'>
                      <img class='highlight__card-image' :src='data.image'/>
                      <StartQuote class='highlight__quotation--start' />
                      <Typography
                        class='highlight__card-content--text'
                        v-html='data.content'
                        color='black'
                        type='xsmall'
                        as='div'
                      />
                      <EndQuote class="highlight__quotation--end"/>
                      <div class='highlight__sponsor-page'>
                        <Typography type='xsmall' weight='700' color='black'>
                          {{ data.page }}
                        </Typography>
                        <Typography class='highlight__sponsor-page--underline' type='xsmall' weight='700' color='black'>
                          {{ data.link }}
                        </Typography>
                      </div>
                  </div>
                </div>
                  <div class='highlight__dots'>
                    <div
                      v-for='(_, i) in sponsors'
                      :class='[
                        i === index && "highlight__dot--filled",
                        "highlight__dot",
                      ]'
                      :key='i'
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <button
            @click='currentSlide = (currentSlide + 1) % sponsors.length'
            class='highlight__arrow'
          >
            <RightArrow/>
          </button>
        </div>
      </div>
  </Section>
</template>

<script>
import Section from '@/components/Section';
import Typography from '@/components/Typography';
import Placeholder from '@/components/Placeholder';
import Card, { placements } from '@/components/Card';
import CardHeader, { sizes } from '@/components/CardHeader';
import Bubble from '@/assets/highlight/star-bubble.svg';
import LeftArrow from '@/assets/left-arrow.svg';
import RightArrow from '@/assets/right-arrow.svg';
import marked from 'marked';
import Remo from '@/assets/highlight/remo/remo-logo.svg';
import StartQuote from '@/assets/quotation-start.svg';
import EndQuote from '@/assets/quotation-end.svg';

export default {
  name: 'Highlight',
  components: {
    Section,
    Typography,
    Placeholder,
    Card,
    CardHeader,
    Bubble,
    LeftArrow,
    RightArrow,
    Remo,
    StartQuote,
    EndQuote
  },
  data() {
    return {
      currentSlide: 0,
      width: 0,
    };
  },
  mounted() {
    window.addEventListener('resize', this.setCardWidth, { passive: true });
    this.setCardWidth();
  },
  destroyed() {
    window.removeEventListener('resize', this.setCardWidth, { passive: true });
  },
  methods: {
    setCardWidth() {
      this.width = this.$refs.sponsors.clientWidth;
    },
  },
  watch: {
    currentSlide(newVal) {
      console.log(newVal);
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
          image:'https://i.pinimg.com/originals/11/0e/7c/110e7c1e1c8c8953e787b56fdff866ed.gif',
          content: marked(`At Microsoft, our mission is to empower every person and every
          organization on the planet to achieve more. With Microsoft Azure you can build, deploy,
          and manage applications with a comprehensive set of cloud services designed for you.
          We can't wait to see you at Hack the 6ix—where we'll be celebrating innovative tech
          projects with great prizes and swag. Start building the future now with access to 25+
          free services on Azure and $100 in credit towards Azure paid services.`),
          page: `Check out `, 
          link: `Microsoft's career page!`
        },
        {
          image: 'https://i.pinimg.com/originals/11/0e/7c/110e7c1e1c8c8953e787b56fdff866ed.gif',
          content: marked(`We know that the transition from student to professional can be a
          challenge. At RBC, we provide you with the tools, support and flexibility to transform
          from a student into a future leader. Turn exciting possibilities into a reality for our
          clients, our communities and you. With access to leading technologies, we are always
          looking for diverse talent ranging from areas in data and analytics, application
          development, cybersecurity, cloud engineers, tech architects and more. If you’re interested
          in learning more about co-op internship opportunities and programs at RBC, **check out RBC's career page!**`),
        },
        {
          image: 'https://i.pinimg.com/originals/11/0e/7c/110e7c1e1c8c8953e787b56fdff866ed.gif',
          content: marked(`Autocode allows you to build webhooks, scripts and APIs instantly. It's
          an online code editor with API autocomplete, instant hosting, and a Standard Library anybody
          can contribute to. Sync data, build bots and customize workflows. When AWS is overkill,
          use Autocode.`),
          page: `Check out `,
          link: `Autocode's career page!`
        },
        {
          image: 'https://i.pinimg.com/originals/11/0e/7c/110e7c1e1c8c8953e787b56fdff866ed.gif',
          content: marked(`Still founder-led by Chairman and Chief Executive Officer Richard Fairbank,
          Capital One is on a mission to help our customers succeed by bringing ingenuity, simplicity,
          and humanity to banking. We measure our efforts by the success our customers enjoy and the
          advocacy they exhibit. We are succeeding because they are succeeding. Guided by our shared values,
          we thrive in an environment where collaboration and openness are valued. We believe that
          innovation is powered by perspective and that teamwork and respect for each other lead to superior
          results. We elevate each other and obsess about doing the right thing. Together, we are on a quest
          to change banking for good. To learn more, **check out Capital One’s career page!**`),
        },
        {
          image: 'https://i.pinimg.com/originals/11/0e/7c/110e7c1e1c8c8953e787b56fdff866ed.gif',
          content: marked(`Remo Conference is a live online events platform that allows people to host
          virtual conferences and online events with the main aim of building authentic conversations
          that drive meaningful relationships!  With the help of different tables, floors & buildings,
          Remo provides an immersive virtual space that empowers people to freely move around and connect,
          communicate & collaborate with each other.`),
        },
      ];
    },
  }
};
</script>

<style lang="scss">
@use '@/styles/mixins';
@use '@/styles/colors';
@use '@/styles/units';

#highlight {
  margin: units.spacing(74) 0;
}

.highlight {
  &__heading {
    display: flex;
    align-items: flex-end;
    margin-bottom: units.spacing(8);
  }

  &__bubble {
    margin-bottom: units.spacing(-2);
    margin-left: units.spacing(4);
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__slides {
    grid-template-columns: units.spacing(6) auto units.spacing(6);
    grid-gap: units.spacing(6);
    max-width: units.spacing(270);
    margin: 0 auto;
    display: grid;
  }

  &__window {
    overflow: hidden;
  }

  &__sponsors {
    @include mixins.transition(transform, slow);
    align-items: stretch;
    display: flex;
    transform:
      translateX(calc(var(--card-width, 0) * var(--card-offset, 0) * -1))
      translateX(calc(#{units.spacing(20)} * var(--card-offset, 0) * -1));
  }

  &__slide-card-container {
    @include mixins.transition(opacity, slow);
    margin-right: units.spacing(20);
    min-width: var(--card-width, 0);
    opacity: 0;

    &--selected {
      opacity: 1;
    }
  }

  &__slide-card {
    height: calc(100% - #{units.spacing(6)});
    flex-direction: column;
    display: flex;

    &--0 {
      & .highlight__quotation--end {
        right: units.spacing(48);
        bottom: units.spacing(25);
      }
    }
    &--1 {
      & .highlight__quotation--end {
        font-size: units.spacing(3);
        right: units.spacing(50);
        bottom: units.spacing(12);
      }
    }
    &--2 {
      & .highlight__quotation--end {
        font-size: units.spacing(3);
      }
    }
    &--3 {
      & .highlight__quotation--end {
        font-size: units.spacing(3);
      }
    }
    &--4 {
      & .highlight__quotation--end {
        font-size: units.spacing(3);
      }
    }
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
    position: relative;
    padding: 0 units.spacing(53);
    box-sizing: border-box;
    flex-grow: 1;
    display: block;

    @include mixins.media(phone) {
      padding: 0 units.spacing(10);
    }
  }

  &__card-image {
    width: 20%;
    padding: units.spacing(4) 0;
  }

  &__card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__quotation--start {
    position: absolute;
    top: units.spacing(32);
    left: units.spacing(46);
  }

  &__quotation--end {
    position: absolute;
  }

  &__card-content--text {
    text-align: left;

    & > p {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__sponsor-page {
    padding-top: units.spacing(6);
  }

  &__sponsor-page--underline {
    text-decoration: underline;
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
  }

</style>