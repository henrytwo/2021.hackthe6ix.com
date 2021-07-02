<template>
  <Section id="faq" class="faq" as="section">
    <SectionHeader
      class="faq__heading"
      color="light-yellow"
      bubble='Question'
    >
      Frequently Asked Questions
    </SectionHeader>
    <ul class="faq__items">
      <li class="faq__item" v-for="(question, index) in questions" :key="index">
        <button
          @click="select(index)"
          class="faq__item-header"
        >
          <Typography type="heading3" as="h3">
            {{ question.label }}
            <Caret
              :class="[selected[index] && 'faq__caret--active', 'faq__caret']"
              width="11"
            />
          </Typography>
        </button>
        <Typography
          :class="[
            selected[index] && 'faq__item-body--active',
            'faq__item-body',
          ]"
          type="paragraph"
          v-html="question.body"
          as="div"
        />
      </li>
    </ul>
  </Section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader';
import Typography from '@/components/Typography';
import Section from '@/components/Section';
import Caret from '@/assets/caret.svg';
import marked from 'marked';

export default {
  name: 'Faq',
  components: {
    SectionHeader,
    Typography,
    Section,
    Caret,
  },
  mounted() {
    const links = this.$el.querySelectorAll('a');
    links.forEach(link => {
      if (!link.href) return;

      const url = new URL(link.href);
      if (url.origin === window.location.origin) {
        link.addEventListener('click', this.scroll);
      }
    })
  },
  data() {
    return {
      selected: {},
      dirty: {},
    };
  },
  methods: {
    scroll(e) {
      e.preventDefault();
      const url = new URL(e.target.href);
      const target = document.getElementById(url.hash.slice(1));
      target.scrollIntoView();
    },
    select(index) {
      if (!this.dirty[index]) {
        this.$set(this.dirty, index, true);
        this.$gtag.event('view-faq', { question: this.questions[index].label });
      }
      this.$set(this.selected, index, !this.selected[index]);
    },
  },
  computed: {
    questions() {
      return [
        {
          label: 'What is Hack the 6ix?',
          body: marked(`Hack the 6ix held on August 20-22, 2021 is a live event
          where “hackers” (participants) design, develop, and pitch a software
          or hardware project built from scratch over the course of 36 hours.
          We will provide you with the resources and mentorship needed in
          order to make this happen!`),
        },
        {
          label: 'Will this hackathon happen in person or virtually?',
          body: marked(`Hack the 6ix will be hosting their second virtual
          hackathon this year! All events will be held and accessed on online
          communication platforms, so you can hack from the comfort of your
          home, no matter where you are!`),
        },
        {
          label: 'When do hacker applications open?',
          body: marked(`Hack the 6ix applications for the 2021 year are going
          to be opening soon. Subscribe <a href="#mail">here</a> if you’d like us to notify
          you when applications are out!`),
        },
        {
          label: 'Am I eligible to participate?',
          body: marked(`Any post-secondary students or recent graduates are
          eligible to participate in our event, regardless of school,
          country, or time zone.`),
        },
        {
          label: 'Do I need to know how to code?',
          body: marked(`Nope! Our mentors and workshops make sure that even if
          you’re new to coding, you’ll definitely pick up enough skills at the
          event to make a project. In addition, if you’re a designer or business
          student, your design and pitching skills are also very valuable!`),
        },
        {
          label: 'What do I need?',
          body: marked(`Make sure you have a device you can develop your project
          on, access to internet, and video/audio capabilities for chatting
          with your teammates, mentors, and sponsors!`),
        },
        {
          label: 'What if I don’t have a team or idea?',
          body: marked(`Don’t worry, you will have a chance to form or join a
          team of up to 4 people before or during the hackathon. We’re going
          virtual this year so you can team up with hackers regardless of their
          school, country, or timezone.

For ideas, check out our submissions from last year
<a href='https://hackthe6ix2020.devpost.com/project-gallery' target='_blank' rel='noopener noreferrer'>here</a>!
`),
        },
        {
          label: 'What kind of workshops, talks, and activities will there be?',
          body: marked(`We’ll be hosting a variety of workshops ranging from
          introductory to advanced topics facilitated by our amazing sponsors
          and mentors. In addition, there will also be interesting tech talks
          by industry leaders from different companies. For breaks, we’ll have
          a ton of fun activities planned for you, such as games, contests, and
          more! Hack the 6ix is much more than just a hackathon – we want it to
          be an event that you’ll thoroughly enjoy while expanding your
          skillset and network.`),
        },
        {
          label: 'How much does it cost to attend?',
          body: marked(`Absolutely nothing! Hack the 6ix is a completely free
          event run by a non-profit organization. All resources and support
          for hacking for the entire event will be provided free of charge.`),
        },
      ];
    },
  },
};
</script>

<style lang="scss">
@use '@/styles/mixins';
@use '@/styles/units';

.faq {
  margin-top: units.spacing(44);
  padding-top: units.spacing(30);

  &__items {
    grid-gap: units.spacing(15) units.spacing(10);
    margin: units.spacing(16.5) 0 0;
    grid-template-columns: 1fr 1fr;
    list-style-type: none;
    display: grid;
    padding: 0;

    @include mixins.media(tablet) {
      grid-template-columns: 1fr;
    }
  }

  &__heading {
    margin-bottom: units.spacing(18);
    display: flex;
    align-items: center;
  }

  &__bubble {
    margin-bottom: units.spacing(-2);
    margin-left: units.spacing(4);
    flex-shrink: 0;
  }

  &__item {
    &-header {
      text-align: start;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }

    &-body {
      @include mixins.transition(max-height);
      overflow: hidden;
      max-height: 0px;

      & a {
        color: inherit;
      }

      &--active {
        max-height: 80vh;
      }
    }
  }

  &__caret {
    @include mixins.transition(transform);
    margin-left: units.spacing(2);
    margin-bottom: units.spacing(1);
    display: inline;

    &--active {
      transform: rotate(180deg);
    }
  }
}
</style>
