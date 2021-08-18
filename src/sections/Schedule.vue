<template>
  <Section class="schedule" id="schedule" as="section">
    <SectionHeader
      align="center"
      bubble="Star"
      class="schedule__heading"
      color="black"
    >
      Schedule
    </SectionHeader>

    <iframe src="https://dash.hackthe6ix.com/calendar" class="schedule__frame"/>

  </Section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader';
import Section from '@/components/Section';

export default {
  name: 'Schedule',
  components: {
    SectionHeader,
    Section,
  },
};
</script>

<style lang="scss">
@use '@/styles/mixins';
@use '@/styles/colors';
@use '@/styles/units';

.schedule {
  background-color: colors.css-color(white);
  padding-bottom: units.spacing(25);
  padding-top: units.spacing(25);
  padding-left: 0;
  padding-right: 0;
  max-width: 100vw;

  width: 100%;

  &__frame {
    width: 100%;
    min-height: 548px;
    border: 0;
  }

}
</style>
