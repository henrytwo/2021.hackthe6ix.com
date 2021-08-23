<template>
  <Section class="schedule" id="schedule" as="section" :fullWidth="true">
    <SectionHeader
        align="center"
        bubble="Star"
        class="schedule__heading"
        color="black"
    >
      Schedule
    </SectionHeader>

    <div class="schedule__controls">
      <Button href="https://dash.hackthe6ix.com/calendar" as="a" target="_blank" class="schedule__controls--button">
        View Expanded
      </Button>
    </div>

    <div class="schedule__container">
      <iframe src="https://dash.hackthe6ix.com/calendar" class="schedule__frame"/>
    </div>
  </Section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default {
  name: 'Schedule',
  components: {
    SectionHeader,
    Section,
    Button
  }
};
</script>

<style lang="scss">
@use '@/styles/mixins';
@use '@/styles/colors';
@use '@/styles/units';

.schedule {
  background-color: colors.css-color(white);
  padding: units.spacing(25) 0 units.spacing(25) 0;

  &__container {
    margin-top: units.spacing(5);

    width: 100%
  }

  &__controls {
    padding: 0 50px 0 50px;
  }

  &__controls--button {
    text-decoration: none;
  }

  &__frame {
    width: calc(100% - 100px);
    padding: 0 50px 0 50px;
    min-height: 830px;
    border: 0;
  }


  @include mixins.media(laptop) {
    &__controls {
      padding: 0 5px 0 5px;
    }

    &__frame {
      width: calc(100% - 10px);
      padding: 0 5px 0 5px;
    }
  }
}
</style>
