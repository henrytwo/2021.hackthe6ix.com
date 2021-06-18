<template>
  <Section id="spotlight" class="highlight" as="section">
    <div class="highlight__content">
      <Typography
        class="highlight__heading"
        type="heading2"
        color="light-yellow"
        transform="uppercase"
        as="h2"
      >
        Sponsor Spotlight
        <Bubble class="highlight__bubble" width="54" />
      </Typography>
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
                title="past_sponsors.ppt"
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
                  To learn more: Check out
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
import Section from '@/components/Section';
import Typography from '@/components/Typography';
import Card, { placements } from '@/components/Card';
import CardHeader, { sizes } from '@/components/CardHeader';
import RightArrow from '@/assets/right-arrow.svg';
import LeftArrow from '@/assets/left-arrow.svg';
import Quotation from '@/assets/quotation.svg';
import Bubble from '@/assets/star-bubble.svg';
import marked from 'marked';

export default {
  name: 'Highlight',
  components: {
    Section,
    Typography,
    Card,
    CardHeader,
    Bubble,
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
    };
  },
  watch: {
    currentSlide() {
      this.setScroll(true);
    },
  },
  methods: {
    setScroll(smooth) {
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
          image: require('@/assets/highlight/microsoft.png'),
          content:
            marked(`At Microsoft, our mission is to empower every person and every
          organization on the planet to achieve more. With Microsoft Azure you can build, deploy,
          and manage applications with a comprehensive set of cloud services designed for you.
          We can't wait to see you at Hack the 6ix—where we'll be celebrating innovative tech
          projects with great prizes and swag. Start building the future now with access to 25+
          free services on Azure and $100 in credit towards Azure paid services.`),
          link: 'https://careers.microsoft.com/students/us/en',
          name: 'Microsoft',
        },
        {
          image: require('@/assets/highlight/rbc.png'),
          content:
            marked(`We know that the transition from student to professional can be a
          challenge. At RBC, we provide you with the tools, support and flexibility to transform
          from a student into a future leader. Turn exciting possibilities into a reality for our
          clients, our communities and you. With access to leading technologies, we are always
          looking for diverse talent ranging from areas in data and analytics, application
          development, cybersecurity, cloud engineers, tech architects and more.`),
          link: 'https://jobs.rbc.com/ca/en/students-grad-co-ops-internships',
          name: 'RBC',
        },
        {
          image: require('@/assets/highlight/autocode.png'),
          content:
            marked(`Autocode allows you to build webhooks, scripts and APIs instantly. It's
          an online code editor with API autocomplete, instant hosting, and a Standard Library anybody
          can contribute to. Sync data, build bots and customize workflows. When AWS is overkill,
          use Autocode.`),
          link: `https://autocode.com/careers`,
          name: 'Autocode',
        },
        {
          image: require('@/assets/highlight/capital-one.png'),
          content:
            marked(`Still founder-led by Chairman and Chief Executive Officer Richard Fairbank,
          Capital One is on a mission to help our customers succeed by bringing ingenuity, simplicity,
          and humanity to banking. We measure our efforts by the success our customers enjoy and the
          advocacy they exhibit. We are succeeding because they are succeeding. Guided by our shared values,
          we thrive in an environment where collaboration and openness are valued. We believe that
          innovation is powered by perspective and that teamwork and respect for each other lead to superior
          results. We elevate each other and obsess about doing the right thing. Together, we are on a quest
          to change banking for good.`),
          link: 'https://www.capitalonecareers.ca/tech',
          name: 'Capital One',
        },
        {
          image: require('@/assets/highlight/remo.png'),
          content:
            marked(`Remo Conference is a live online events platform that allows people to host
          virtual conferences and online events with the main aim of building authentic conversations
          that drive meaningful relationships!  With the help of different tables, floors & buildings,
          Remo provides an immersive virtual space that empowers people to freely move around and connect,
          communicate & collaborate with each other.`),
          link: 'https://remo1.freshteam.com/jobs',
          name: 'Remo',
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
    display: flex;
    align-items: flex-end;
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
