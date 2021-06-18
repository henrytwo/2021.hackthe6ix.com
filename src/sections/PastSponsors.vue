<template>
  <Section class="past-sponsors" id="past-sponsors" as="section">
    <SectionHeader align='center' bubble='Star' class="past-sponsors__heading" color='black'>
      Past Sponsors
    </SectionHeader>
    <div class="past-sponsors__groups">
      <ul
        v-for="[key, group] in Object.entries($static)"
        :class="[`past-sponsors__group--${key}`, 'past-sponsors__group']"
        :key="key"
      >
        <li v-for="(sponsor, index) in group.edges[0].node.logos" :key="index">
          <a
            :href="sponsor.description"
            target="_blank"
            class="past-sponsors__item"
          >
            <img
              :class="[`past-sponsors__image--${key}`, 'past-sponsors__image']"
              :src="`https:${sponsor.file.url}`"
              :alt="sponsor.title"
            />
          </a>
        </li>
      </ul>
    </div>
  </Section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader';
import Section from '@/components/Section';

export default {
  name: 'PastSponsors',
  components: {
    SectionHeader,
    Section,
  },
};
</script>

<static-query>
{
  gold: allContentfulSponsorCategory(filter:{
    slug:{
      eq: "gold-2021"
    }
  }) {
    edges {
      node {
        logos {
          title
          description
          file {
            url
          }
        }
      }
    }
  }
  silver: allContentfulSponsorCategory(filter:{
    slug:{
      eq: "silver-2021"
    }
  }) {
    edges {
      node {
        logos {
          title
          description
          file {
            url
          }
        }
      }
    }
  }
  bronze: allContentfulSponsorCategory(filter:{
    slug:{
      eq: "bronze-2021"
    }
  }) {
    edges {
      node {
        logos {
          title
          description
          file {
            url
          }
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@use '@/styles/mixins';
@use '@/styles/colors';
@use '@/styles/units';

.past-sponsors {
  background-color: colors.css-color(white);
  padding-bottom: units.spacing(25);
  padding-top: units.spacing(25);

  &__bubble {
    margin-bottom: units.spacing(-2);
    margin-left: units.spacing(4);
  }

  &__heading {
    margin-bottom: units.spacing(8);
  }

  &__groups {
    margin-top: units.spacing(20);
  }

  &__group {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    padding: 0;
    margin: 0;
  }

  &__item {
    display: flex;
  }

  &__image {
    @include mixins.transition(transform);
    margin: units.spacing(7);
    width: auto;
    transform: scale(1);

    &:hover {
      transform: scale(1.1);
    }

    &--gold {
      max-height: units.spacing(22);
    }

    &--silver {
      max-height: units.spacing(15);
    }

    &--bronze {
      max-height: units.spacing(7);
      margin: units.spacing(7) units.spacing(4);
    }
  }
}
</style>
